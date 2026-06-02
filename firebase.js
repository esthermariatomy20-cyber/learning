// ============================================================
//  firebase.js — Shared Firebase config for ALL pages
//  Place this file in the SAME folder as index.html
// ============================================================

// STEP 1 ► Go to https://console.firebase.google.com
// STEP 2 ► Create a project → Add a Web App
// STEP 3 ► Copy your config values below

export const firebaseConfig = {
    apiKey:            "AIzaSyXXXXXX",        // ← must start with AIzaSy
    authDomain:        "website.firebaseapp.com",
    projectId:         "website",
    storageBucket:     "website.appspot.com",
    messagingSenderId: "123456789",
    appId:             "1:123:web:abc123"
};

// ============================================================
//  Firestore Security Rules (paste these in Firebase Console
//  under Firestore → Rules)
// ============================================================
/*
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Users can only read/write their own profile
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

    // Users can write their own quiz results; read their own
    match /quizResults/{docId} {
      allow create: if request.auth != null && request.resource.data.uid == request.auth.uid;
      allow read:   if request.auth != null && resource.data.uid == request.auth.uid;
    }

    // Learning progress — same pattern
    match /learningProgress/{docId} {
      allow create: if request.auth != null && request.resource.data.uid == request.auth.uid;
      allow read:   if request.auth != null && resource.data.uid == request.auth.uid;
    }
  }
}
*/
