export default function useModal() {
    const open = useState<boolean | null>('modal', () => false);

    onMounted(() => {
        open.value = false;
    })

    const toggleModal = () => {
        open.value = !open.value;
    }

    return {
        open,
        toggleModal
    }
}