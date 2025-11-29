const getProductData = async () => {
  try {
    const res = await fetch("https://ilkinibadov.com/api/v1/products")
   
    const data = await res.json()
    console.log(data);

  } catch (error) {
    console.error(error);
  }
}
getProductData()

const getLogin = async () => {
  try {
    const res = await fetch("https://ilkinibadov.com/api/v1/auth/login", {
      method: "POST",
        body: JSON.stringify({
        email: "ilkin@example.com",
        password: "12345678"
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })

    const data1 = await res.json()
    console.log(data1);

  } catch (error) {
    console.error(error);
  }
}
getLogin()

const getFindProductData = async () => {
  try {
    const res = await fetch("https://ilkinibadov.com/api/v1/search?searchterm=lamp")
   
    const data2 = await res.json()
    console.log(data2);

  } catch (error) {
    console.error(error);
  }
}
getFindProductData()