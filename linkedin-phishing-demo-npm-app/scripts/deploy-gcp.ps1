npm install

npm run build

gcloud app deploy `
    --version=$(Get-Content ./VERSION) `
    --project 'henryfbp-linkedin-phishing'
#     --quiet
