import { Search } from 'citz-imb-sp-utilities'

export const GetSites = () => {
	let sites = []

	return new Promise((resolve, reject) => {
		Search({
			query: 'SPSiteUrl:citz.sp AND contentclass:STS_Web AND UrlDepth=3',
			properties: 'Title,Path,Description,ParentLink',
			rowlimit: 500,
		}).then((response) => {
			response.PrimaryQueryResult.RelevantResults.Table.Rows.results.map(
				(item) => {
					let obj = {}
					for (let i = 0; i < item.Cells.results.length; i++) {
						obj[item.Cells.results[i].Key] =
							item.Cells.results[i].Value
					}
					sites.push(obj)
				}
            )
            sites.sort((a,b)=>{
                if (a.Title > b.Title) return 1
                if (a.Title < b.Title) return -1
                return 0
            })

			resolve(sites)
		})
	})
}
