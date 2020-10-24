const pug = require('pug')
const request = require('request')
const parser = require('xml2json')
const service_key = 'RiHm2l4BM7QvP31lsTAaucYZu6YFfm5509MNrkV5qf2SG4dkcbCk9FHJZWYTKTW9p2YugVf4KJFHZtAjcz48TA%3D%3D'
const url = `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?ServiceKey=${service_key}`

request({
  url: url,
  method: 'GET'
}, (error, response, xml) => {
  const json = JSON.parse(parser.toJson(xml))
  const item = json.response.body.items.item
  console.table(item)
  const addrs = item.map(i => i.addr)
  const template = `
ul
  each addr in addrs
    li= addr
  `
  const html = pug.render(template, { addrs: addrs })
  console.log(html)
})