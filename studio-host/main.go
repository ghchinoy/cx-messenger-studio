package main

import (
	"embed"
	"fmt"
	"io/fs"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
)

//go:embed web/*
var static embed.FS

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	r := mux.NewRouter()
	//r.HandleFunc("/analyze", analyzehandler).Methods("POST")
	r.PathPrefix("/").Handler(http.FileServer(getFileSystem()))
	http.Handle("/", r)

	if err := http.ListenAndServe(fmt.Sprintf(":%s", port), r); err != nil {
		log.Fatalln(err)
	}
}

// getFileSystem strips out prefixes
func getFileSystem() http.FileSystem {
	fsys, err := fs.Sub(static, "web")
	if err != nil {
		log.Fatal(err)
	}
	return http.FS(fsys)
}
