import ToastUtil from "@shared/utils/ToastUtil";
import { AuthFormInputs } from "@widgets/index";

const authSubmit = async (data: AuthFormInputs) => {
    ToastUtil.serverError();
} 

export default authSubmit;