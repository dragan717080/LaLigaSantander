abstract class ObjectHelpers {
    static splitArrayToChunks(arr: unknown[], size: number) {
        return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
            arr.slice(i * size, i * size + size)
        );
    }
}

export default ObjectHelpers;
