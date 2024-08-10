
# GenZQue

**GenZQue** is a modern, scalable queue management system designed to reduce wait times in places like hospitals, salons, and medical stores. The project is part of the GenZVerse suite of applications.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Appointment Booking**: Users can book appointments in advance, reducing the need to wait in long queues.
- **Real-Time Updates**: Get real-time updates on queue status.
- **Notifications**: Receive alerts when your turn is approaching.
- **Admin Dashboard**: Businesses can manage appointments and walk-ins efficiently.
- **Responsive Design**: Optimized for both mobile and web platforms.

## Tech Stack

- **Frontend**: 
  - React
  - Tailwind CSS
- **Backend**:
  - Firebase Authentication
  - Firestore (Database)
  - Firebase Cloud Functions
  - Firebase Cloud Messaging
- **Deployment**:
  - Firebase Hosting

## Installation

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Firebase CLI

### Clone the Repository

```bash
git clone https://github.com/your-username/genzque.git
cd genzque
```

### Install Dependencies

```bash
npm install
# or
yarn install
```

### Set Up Firebase

1. Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
2. Add your Firebase configuration to the project.

   Create a `.env` file in the root directory and add the following:

   ```env
   REACT_APP_FIREBASE_API_KEY=your-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
   REACT_APP_FIREBASE_PROJECT_ID=your-project-id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   REACT_APP_FIREBASE_APP_ID=your-app-id
   ```

3. Initialize Firebase in your project:

```bash
firebase init
```

4. Deploy your project:

```bash
firebase deploy
```

## Usage

### Running the Project Locally

To run the project locally, use:

```bash
npm start
# or
yarn start
```

The app will be available at `http://localhost:3000`.

### Deployment

To deploy the app to Firebase Hosting, use:

```bash
firebase deploy
```

## Contributing

Contributions are welcome! Here’s how you can help:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

Please make sure to follow the code style and include tests for any new features.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions, feel free to reach out:

- **Name**: Karan Dixit
- **Email**: dixitk941@gmail.com
- **LinkedIn**: [Karan Dixit](https://www.linkedin.com/in/karan-dixit-7223a628a)
