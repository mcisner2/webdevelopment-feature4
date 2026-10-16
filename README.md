# ASL Awareness Project

**Authors:** Marcos Cisneros and Elijah Jones

## Description

The ASL Awareness Project is a React and Vite web application designed to promote awareness and education about American Sign Language (ASL). The application includes an ASL sign browser, an ASL history timeline, awareness resources, educational content, and Parse-backed data models.

ASL sign images are displayed as 28×28 grayscale images rendered dynamically on an HTML canvas. Sign data is loaded asynchronously from a Parse (Back4App) backend and presented through a searchable, sortable interface.

---

## Features

### Sign Browser
- Displays ASL alphabet signs stored in Parse
- Search signs by letter
- Sort signs alphabetically (A-Z or Z-A)
- Toggle image captions on and off
- Render sign images using the HTML Canvas API

### History of ASL
- Displays major historical events related to ASL
- Loads data asynchronously from JSON resources
- Uses reusable React components for event display

### Awareness Resources
- Provides information about organizations supporting the Deaf and hard-of-hearing community
- Includes links to educational and advocacy organizations

### User Authentication Model
- Parse-backed User model
- Supports user signup
- Supports user login/logout
- Supports retrieving the currently authenticated user

---

## Tech Stack

- React 19
- React Router
- Vite
- Parse SDK (Back4App)
- HTML Canvas API

---

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/mcisner2/webdevelopment-feature4.git
cd webdevelopment-feature4
```

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

Parse configuration is located in:

```text
src/Shared/parseConfig.jsx
```

---

## Project Structure

```text
src/
│
├── App.jsx
├── main.jsx
│
├── Shared/
│   ├── parseConfig.jsx
│   └── Components/
│       └── Main/
│           ├── Header.jsx
│           ├── Navigation.jsx
│           └── Footer.jsx
│
├── Signs/
│   ├── Components/
│   │   ├── Components.jsx
│   │   ├── SignPage.jsx
│   │   └── SignImage.jsx
│   │
│   ├── Models/
│   │   └── signModel.jsx
│   │
│   ├── Services/
│   │   └── getData.jsx
│   │
│   └── signData.json
│
└── Misc/
    ├── Authentication/
    │   └── Models/
    │       └── userModel.js
    │
    ├── Features/
    │   ├── History/
    │   │   ├── Components/
    │   │   │   ├── HistoryList.jsx
    │   │   │   └── HistoryEvent.jsx
    │   │   ├── Services/
    │   │   │   └── HistoryService.jsx
    │   │   └── history.json
    │   │
    │   ├── Awareness/
    │   │   └── awareness.json
    │   │
    │   └── Quiz/
    │       └── quiz.json
```

---

## Parse Backend

The application uses Back4App (Parse Server) as its backend.

### Sign Class

| Field | Type |
|---------|---------|
| label | Number |
| pixels | Array |

The Sign model supports the following CRUD operations:

- `getAllSigns()`
- `createSign()`
- `updateSign()`
- `deleteSign()`

### User Class

The application uses Parse's built-in User class.

| Field | Type |
|---------|---------|
| username | String |
| email | String |
| password | String |

The User model supports:

- `signUpUser()`
- `loginUser()`
- `logoutUser()`
- `currentUser()`

---

## Software Design

### Models
Responsible for communication with Parse.

Examples:
- `signModel.jsx`
- `userModel.js`

### Components
Responsible for rendering the user interface.

Examples:
- `SignPage.jsx`
- `SignImage.jsx`
- `HistoryList.jsx`
- `HistoryEvent.jsx`

### Services
Responsible for retrieving and preparing data.

Examples:
- `HistoryService.jsx`
- `getData.jsx`

---

## UML Documentation

Project UML and design diagrams are included in:

```text
feature-4-uml.png (submitted separately)
```

These diagrams document the application's architecture, models, and component relationships.

---

## Future Improvements

- Complete Awareness page UI
- Complete Quiz page UI
- Add user registration and login screens
- Track user progress through quizzes

---

## Citations

- Sign Language MNIST Dataset:
  https://www.kaggle.com/datasets/datamunge/sign-language-mnist

- Mozilla Developer Network (MDN) documentation was referenced for implementation of the HTML Canvas API and ImageData API used to render ASL signs.


---

## License

This project was created for educational purposes as part of CSE 40693 - Modern Web Development
