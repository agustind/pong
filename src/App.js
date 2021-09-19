import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
    loaderUrl: "Build/CryptoPong.loader.js",
    dataUrl: "Build/CryptoPong.data.br",
    frameworkUrl: "Build/CryptoPong.framework.js.br",
    codeUrl: "Build/CryptoPong.wasm.br",
});

function App() {
  return (
    <div className="App">
        <div className="max-w-3xl mt-12 mx-auto">
            <button className="bg-red-400 px-4 py-2 rounded-lg">connect with metamask</button>
            <div className="mt-12">
                <Unity unityContext={unityContext} />
            </div>
        </div>
    </div>
  );
}

export default App;
