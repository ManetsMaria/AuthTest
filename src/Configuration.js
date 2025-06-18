const awsExports={
    Auth: {
        Cognito: {
            userPoolClientId: '33d0fvu4q4g9s09sck9c4rvk5u',
            userPoolId: 'eu-west-2_LgVvBYGh6',
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