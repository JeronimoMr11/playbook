export default class pullRequest {
    constructor(title, branchName, dateCreated, status, repositoryNameAssociated){
        this.title = title
        this.branchName = branchName
        this.dateCreated = dateCreated
        this.status = status
        this.repositoryNameAssociated = repositoryNameAssociated

    }
    getStatus() {
        return `The status of this Pr located at ${this.branchName} is ${this.status} `
    }
    getTitleAndAuthor(){
        return `This Pr titled ${this.title} was made by ${this.repositoryNameAssociated} on ${this.dateCreated}`
    }
}
const newPr = new pullRequest("lAUNCHX", "NodeJs",new Date(),"Open","Explorer Hec")
console.log(newPr.getStatus())
console.log(newPr.getTitleAndAuthor())
