import {appReducer} from "./appReducer";
import {setStatusAC} from "./appReducerActions";
import {RequestStatusType} from "./appReducerTypes";


let startState = {
    status: "" as RequestStatusType
}

beforeEach(()=>{
    startState.status = "idle"
})

test('setStatusAC should work correctly', ()=>{

    const result = appReducer(startState, setStatusAC("loading"))

    expect(startState.status).toBe('idle')
    expect(result.status).toBe("loading")
    expect(startState.status).not.toEqual(result.status)
})