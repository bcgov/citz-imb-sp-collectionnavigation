import { GetCollections } from './GetCollections'

export const GetMenuItems = () => {

    return new Promise((resolve,reject)=>{
        GetCollections().then(results=>{
            resolve(results)
        })
    })
}
