import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './Configuration';
import FileUploader from "./components/FileUploader.jsx";

Amplify.configure(awsExports);

function App({ signOut, user }) {
    return (
        <>
            <h1>Hello {user.username}</h1>
            <FileUploader />
            <button onClick={signOut}>Sign out</button>
        </>
    );
}

const AppWithAuth = withAuthenticator(App);

export default AppWithAuth;