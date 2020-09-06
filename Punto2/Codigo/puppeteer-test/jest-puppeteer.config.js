module.exports = {
  launch: {
    dumpio: true,
    headless: true,
    // Aquí podemos introducir los argumentos que normalmente irían en la función launch()
    slowMo: 300
  },
  browser: 'chromium',
  browserContext: 'default',
}