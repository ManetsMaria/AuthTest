import React from 'react';
import { StorageManager } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';
import { Alert } from '@aws-amplify/ui-react';

const ImageUploader = () => {
    return (
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <h2>Загрузите изображение</h2>
            <StorageManager
                acceptedFileTypes={['image/*']} // Только изображения
                path="" // Папка в S3 (не забудьте настроить права!)
                maxFileCount={1} // Максимум 5 файлов
                isResumable // Возобновляемая загрузка
                provider="AWSS3" // Используем S3
            />
        </div>
    );
};

export default ImageUploader;