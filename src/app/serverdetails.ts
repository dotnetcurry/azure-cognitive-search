export class ServerDetails {
  // 1. the Service name
  public static searchServiceName = 'allorderssearch';
  // 2. The Admin Key
  public static searchServiceAdminApiKey = '<YOUR-ADMIN-KEY>';
  // 3. The Index Name
  public static searchIndexName = 'cosmosdb-index-allordersdata';
  public static searchIndexNameLucene = 'cosmosdb-index-suppliersdata';
  // 4. The API Version
  public static apiVersion = '2019-05-06';
  // 5. The Search URLS
  // tslint:disable-next-line: max-line-length
  public static searchUri = `https://${ServerDetails.searchServiceName}.search.windows.net/indexes/${ServerDetails.searchIndexName}/docs/search?api-version=${ServerDetails.apiVersion}`;

// tslint:disable-next-line: max-line-length
public static searchUriLucene = `https://${ServerDetails.searchServiceName}.search.windows.net/indexes/${ServerDetails.searchIndexNameLucene}/docs/search?api-version=${ServerDetails.apiVersion}`;


  // tslint:disable-next-line: max-line-length
  public static autocompleteUri = `https://${ServerDetails.searchServiceName}.search.windows.net/indexes/${ServerDetails.searchIndexName}/docs/autocomplete?api-version=${ServerDetails.apiVersion}`;


}
