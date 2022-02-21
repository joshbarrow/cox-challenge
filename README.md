# Available Scripts

In the project directory, you can run:

### `yarn install`

Installs all dependencies for the project.


### `yarn spec a`

Runs all avaiable tests for the project

### `yarn spec {file path}`

Runs tests for a specific spec. Example:

```
yarn spec src/spec/dataset.spec.js
```


# Dealer Inventory API

> I decided to use javascript to solve this challenge because of its powerful methods, specifically the Promise.all() method, which allowed me to iterate through multiple promises and return a single promise with the results. This significantly reduced the time needed to complete the challenge. 

## Dataset API

### getId()

```js
import DatasetApi from './dealer-inventory-api/dataSet'

await DatasetApi.getId()
//  7C0b7HDz2Qg
```

### inventory(datasetId)

```js
import DatasetApi from './dealer-inventory-api/dataSet'

const datasetId = await DatasetApi.getId()
await DatasetApi.inventory(datasetId)

// {
//   "dealers": [
//     {
//       "dealerId": 746193740,
//       "name": "Bob's Cars",
//       "vehicles": [
//         {
//           "vehicleId": 1520878715,
//           "year": 2016,
//           "make": "Honda",
//           "model": "Accord"
//         },
//         ...
//       ]
//     },
//     ...
//   ]
// }
```

### validateInventory(datasetId, inventory)

```js
import DatasetApi from './dealer-inventory-api/dataSet'

const datasetId = await DatasetApi.getId()
const inventory = await DatasetApi.inventory(datasetId)
await DatasetApi.validateInventory(datasetId, inventory)

//  { "success": true }
```

## Vehicle API

### index(datasetId)

```js
import VehicleApi from './dealer-inventory-api/vehicle'

await VehicleApi.index(datasetId)

// [2302402, 1020102, 12001024, ...]
```

### show(datasetId, vehicleId)

```js
import VehicleApi from './dealer-inventory-api/vehicle'

const vehicleIds = await VehicleApi.index(datasetId)
await VehicleApi.show(vehicleId[0])

//  {
//   "vehicleId": 0,
//   "year": 0,
//   "make": "string",
//   "model": "string"
//  }
```

## Dealer API

### show(datasetId, dealerId)

```js
import DealerApi from './dealer-inventory-api/dealer'
import VehicleApi from './dealer-inventory-api/vehicle'

const vehicleIds = await VehicleApi.index(datasetId)
const vehicle = await VehicleApi.show(vehicleId[0])
await DealerApi.show(datasetId, vehicle.dealerId)

//  { "dealerId": 12912939, name: "Bob's Dealership" }
```
