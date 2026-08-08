# One-liner deployment
npx create-vercel-app rsx-pannel --template static && \
cd rsx-pannel && \
echo "YOUR_HTML_HERE" > index.html && \
echo "/*    /index.html   200" > _redirects && \
echo "# RS X PANNEL" > README.md && \
vercel --prod --yes
