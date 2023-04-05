import { imagedni } from "../assets/images";

const UploadDni = () => {
  return (
    <div className="flex mt-5 w-full px-1">
      <div class="flex-column items-center p-2 justify-center w-full">
        <label
          for="nombre"
          className="block text-sm font-medium text-gray-900  "
        >
          Foto frontal:
        </label>
        <label
          for="frontal"
          class="flex flex-col items-center justify-center text-center   border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <img src={imagedni} />
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="font-semibold">Click to upload</span>
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input id="frontal" type="file" class="hidden" />
        </label>
      </div>

      <div class="flex-column items-center p-2 justify-center w-full">
        <label
          for="nombre"
          className="block text-sm font-medium text-gray-900  "
        >
          Foto del dorso:
        </label>
        <label
          for="trasero"
          class="flex flex-col text-center  items-center justify-center  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <img src={imagedni} />
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="font-semibold">Click to upload</span>
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input id="trasero" type="file" class="hidden" />
        </label>
      </div>
    </div>
  );
};

export default UploadDni;
