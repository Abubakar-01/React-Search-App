# React Search App

## Project Structure

```
React-Search-App/
├── README.md                    # Project documentation
├── package.json                 # Project dependencies and scripts
├── package-lock.json           # Locked dependency versions
├── public/
│   └── index.html              # Main HTML template
└── src/
    ├── index.js                # Application entry point
    ├── App.js                  # Main application component
    ├── api.js                  # API service functions
    └── components/
        ├── SearchBar.js        # Search input component
        ├── SearchBar.css       # Search bar styles
        ├── ImageList.js        # Image list container component
        ├── ImageList.css       # Image list styles
        └── ImageShow.js        # Individual image display component
```

## Key Files Description

- **src/index.js**: Entry point that renders the React app
- **src/App.js**: Main application component containing the app logic
- **src/api.js**: Contains API service functions for external data fetching
- **src/components/SearchBar.js**: Component for user search input
- **src/components/ImageList.js**: Component that displays a list of images
- **src/components/ImageShow.js**: Component for displaying individual images
- **public/index.html**: HTML template where the React app is mounted
