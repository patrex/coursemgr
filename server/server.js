import app from './app';
const port = 5000 || process.env.PORT;
app.listen(port, () => {
    console.log(`App running at localhost:${port}`);
})
