import { Bounce, toast, ToastOptions } from "react-toastify";

class ToastUtil {
    private baseSettings: ToastOptions = {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
    }

    serverError(title?: string) {
        toast.error(title || 'Ошибка сервера', this.baseSettings);
    }
}

export default new ToastUtil();