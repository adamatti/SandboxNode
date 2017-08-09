'use strict'
const $http = require('http-as-promised')

function createCountry(callback){
    const json = {
        countries: [
            {
                name:"Brasil"
            }
        ]
    }
    return $http.post('http://localhost:3000/countries',{json}).spread(callback)
}

function createCustomer(countryId, callback){
    const json = {
        customers: [
            {
                name: "marcelo",
                links: {
                    country: countryId
                }
            }
        ]
    }
    return $http.post('http://localhost:3000/customers',{json}).spread(callback)
}

function createOrder(customerId, callback){
    const json = {
        orders: [
            {
                description: "sample",
                links: {
                    customer: customerId
                }
            }
        ]
    }
    return $http.post('http://localhost:3000/orders',{json}).spread(callback)
}

return createCountry((response,body) =>{
    const countryId = body.countries[0].id
    console.log('Country Id: ', countryId)

    return createCustomer(countryId, (response,body) => {
        const customerId = body.customers[0].id
        console.log("Customer id: ", customerId)

        return createOrder(customerId, (response, body) => {
            console.log("Order created: ", body.orders[0].id)
        })
    })
})