import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogReducer";

const store = {
    _state : {
        content:{
            profileState: {
                posts: [
                    {id: 1, img : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp2482751.jpg&f=1&nofb=1',userName: 'Vlad', message: 'hello world', likes: 0},
                    {id: 2, img : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp2098631.jpg&f=1&nofb=1',userName: 'Misa', message: 'I am piss of shit', likes: 999},
                ],
                textarea: ''
            },
            dialogsState: {
                dialogs: [
                    {id: 1, name: 'Vlad'},
                    {id: 2, name: 'Kostya'}
                ],
                messages: [
                    {id: 1, message: 'Vd'},
                    {id: 2, message: 'Ktya'}
                ],
                messageBody: ''
            }
        }
    },
    _render() {
        console.log('state changed')
    },

    getState (){
        return this._state;
    },
    dispatch(action){
        this._state.content.profileState = profileReducer(this._state.content.profileState, action);
        this._state.content.dialogsState = dialogReducer(this._state.content.dialogsState, action);
        this._render(this.getState(), this.dispatch)
    },
    subscribe (observer) {
        this._render = observer;
    }
}

window.store = store;






export default store;