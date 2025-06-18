import React from 'react';
import { StorageManager } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';
import { Alert } from '@aws-amplify/ui-react';

const ImageUploader = () => {
    return (
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <h2>Загрузите изображение</h2>
            <StorageManager
                acceptedFileTypes={['image/*']}
                path=""
                maxFileCount={1}
                isResumable
                provider="AWSS3"
            />
        </div>
    );
};

export default ImageUploader;