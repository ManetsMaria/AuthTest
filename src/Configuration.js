const awsExports={
    Auth: {
        Cognito: {
            userPoolClientId: import.meta.env.VITE_USER_POOL_CLIENT_ID,
            userPoolId: import.meta.env.VITE_USER_POOL_ID,
            loginWith: {
                username: 'true',
                email: 'true'
            }
        },
        Storage: {
            AWSS3: {
                bucket: 'mytemptestforimages',
                region: 'eu-west-2'
            }
        }
    }
}

export default awsExports