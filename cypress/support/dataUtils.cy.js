import { APIKey, APIToken } from "../support/constants.cy";
class dataUtils {
    createBoard = (boardName) => {
        return cy.request("POST", `https://api.trello.com/1/boards/?name=${boardName}&key=${APIKey}&token=${APIToken}`)
    }
    deleteBoard = (boardId) => {
        return cy.request("DELETE", `https://api.trello.com/1/boards/${boardId}?key=${APIKey}&token=${APIToken}`
        )
    }
    createListBoard = (boardId, listName) => {
        return cy.request("POST", `https://api.trello.com/1/boards/${boardId}/lists?name=${listName}&key=${APIKey}&token=${APIToken}`)
    }

    createOnCard = (listId, cardName) => {
        return cy.request("POST", `https://api.trello.com/1/cards?idList=${listId}&key=${APIKey}&token=${APIToken}`, { name: cardName }
        )
    }

    createBoardTemplate = (boardName, template) => {
        return cy.request("POST", `https://api.trello.com/1/boards/?name=${boardName}&key=${APIKey}&token=${APIToken}`, { isTemplate: template })
    }

    createOnTemplateCard = (listId, cardName, template) => {
        return cy.request("POST", `https://api.trello.com/1/cards?idList=${listId}&key=${APIKey}&token=${APIToken}`, { name: cardName, isTemplate: template }
        )
    }
}
export default dataUtils