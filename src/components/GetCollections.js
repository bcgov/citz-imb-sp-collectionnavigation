import { Search } from 'citz-imb-sp-utilities'

export const GetCollections = () => {
	let collections = []

	return new Promise((resolve, reject) => {
		Search({
			query: 'SPSiteUrl:citz.sp AND contentclass:STS_Site',
			properties: 'Title,Path,Description',
		}).then((response) => {
			response.PrimaryQueryResult.RelevantResults.Table.Rows.results.map(
				(item) => {
					let obj = {}
					for (let i = 0; i < item.Cells.results.length; i++) {
						obj[item.Cells.results[i].Key] =
							item.Cells.results[i].Value
					}
					if(obj.Path.toLowerCase() !== 'https://citz.sp.gov.bc.ca/sites/dev' && obj.Path.toLowerCase() !== 'https://citz.sp.gov.bc.ca/sites/uat'){
						collections.push(obj)
					}

				}
			)

			collections.sort((a,b)=>{
                if (a.Title > b.Title) return 1
                if (a.Title < b.Title) return -1
                return 0
			})

			resolve(collections)
		})
	})
}