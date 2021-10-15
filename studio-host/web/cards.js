
const cards = new Map();

cards.set('default', [
    {
        "type": "image",
        "rawUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtwDUT66rGcuOz3urrDnrpYFWn5dMoWTm-Yg&usqp=CAU",
        "accessibilityText": "Dialogflow across platforms"
    },
    {
        "type": "accordion",
        "title": "Catcordion",
        "subtitle": "open pls",
        "image": {
            "src": {
                "rawUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtwDUT66rGcuOz3urrDnrpYFWn5dMoWTm-Yg&usqp=CAU"
            }
        },
        "text": "cat"
    },
    {
        "type": "chips",
        "options": [
            {
                "text": "Chip 1",
                "image": {
                    "src": {
                        "rawUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtwDUT66rGcuOz3urrDnrpYFWn5dMoWTm-Yg&usqp=CAU"
                    }
                },
                "link": "https://example.com"
            },
            {
                "text": "Chip 2",
                "image": {
                    "src": {
                        "rawUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtwDUT66rGcuOz3urrDnrpYFWn5dMoWTm-Yg&usqp=CAU"
                    }
                }
            }
        ]
    }
]);

cards.set('accordion', [
    {
        "type": "accordion",
        "title": "Accordion title",
        "subtitle": "Accordion subtitle",
        "image": {
            "src": {
                "rawUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtwDUT66rGcuOz3urrDnrpYFWn5dMoWTm-Yg&usqp=CAU"
            }
        },
        "text": "Accordion text"
    }
]);

cards.set('info', [
    {
        "type": "info",
        "title": "Info item title",
        "subtitle": "Info item subtitle",
        "image": {
            "src": {
                "rawUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtwDUT66rGcuOz3urrDnrpYFWn5dMoWTm-Yg&usqp=CAU"
            }
        },
        "actionLink": "https://example.com"
    }
]);

cards.set('description', [
    {
        "type": "description",
        "title": "Description title",
        "text": [
            "This is text line 1.",
            "This is text line 2."
        ]
    }
]);

cards.set('image', [
    {
        "type": "image",
        "rawUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtwDUT66rGcuOz3urrDnrpYFWn5dMoWTm-Yg&usqp=CAU",
        "accessibilityText": "Example logo"
    }
]);

cards.set('button', [
    {
        "type": "button",
        "icon": {
            "type": "chevron_right",
            "color": "#FF9800"
        },
        "text": "Button text",
        "link": "https://example.com",
        "event": {
            "name": "",
            "languageCode": "",
            "parameters": {}
        }
    }
]);

cards.set('list', [
    {
        "type": "list",
        "title": "List item 1 title",
        "subtitle": "List item 1 subtitle",
        "event": {
            "name": "",
            "languageCode": "",
            "parameters": {}
        }
    },
    {
        "type": "divider"
    },
    {
        "type": "list",
        "title": "List item 2 title",
        "subtitle": "List item 2 subtitle",
        "event": {
            "name": "",
            "languageCode": "",
            "parameters": {}
        }
    }
]);

cards.set('suggestion chips', [
    {
      "type": "chips",
      "options": [
        {
          "text": "Chip 1",
          "image": {
            "src": {
              "rawUrl": "https://example.com/images/logo.png"
            }
          },
          "link": "https://example.com"
        },
        {
          "text": "Chip 2",
          "image": {
            "src": {
              "rawUrl": "https://example.com/images/logo.png"
            }
          },
          "link": "https://example.com"
        }
      ]
    }
  ]);