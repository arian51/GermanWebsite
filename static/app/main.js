async function getData() {
    const response = await fetch('http://localhost:8080/getWord');
    const data = await response.json();
    return dataName = data;
}

getData().then(ctx => {
  console.log(ctx);
    Vue.createApp({
        data() {
            return {
                items: ctx
            }
        }
    }).mount('#array-rendering')
})