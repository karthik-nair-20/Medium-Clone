import { CurrentUserInterface } from "src/app/shared/types/currentUsers.interface"
import { BackEndErrorInterface } from "src/app/shared/types/backendError.interface"

export interface AuthStateInterface{
    isSubmitting: boolean,
    isLoading: boolean,
    currentUser: CurrentUserInterface | null | undefined,
    validationError: BackEndErrorInterface| null
}