src/
└── scss/
    ├── abstracts/         # Tools and helpers (no output CSS)
    │   ├── _variables.scss
    │   ├── _mixins.scss
    │   └── _functions.scss
    ├── base/              # Global styles
    │   ├── _reset.scss    # <--- YOUR RESET FILE GOES HERE
    │   ├── _typography.scss
    │   └── _base.scss     # Global defaults for <html> and <body>
    ├── components/        # Reusable UI elements (buttons, cards, inputs)
    │   ├── _buttons.scss
    │   ├── _card.scss
    │   └── _nav-bar.scss
    ├── layout/            # Major structural sections
    │   ├── _header.scss
    │   ├── _footer.scss
    │   └── _grid.scss
    ├── pages/             # Page-specific styles
    │   ├── _home.scss
    │   └── _contact.scss
    └── main.scss          # The "Manifest" file that imports everything