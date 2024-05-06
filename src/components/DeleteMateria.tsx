

const DeleteMateria = () => {
    return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center bg-pink-600 p-8 h-160 rounded-lg w-96 mx-auto">
        <h2 className="text-4xl font-bold mb-8">Deletar Matéria</h2>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
              1
            </button>
            <span className="text-xl">Matéria 1</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
              2
            </button>
            <span className="text-xl">Matéria 2</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
              3
            </button>
            <span className="text-xl">Matéria 3</span>
          </div>
        </div>
        <button className="mt-8 px-6 py-3 bg-black rounded-full text-lg">Deletar </button>
      </div>
    </div>
    
    );
};

export default DeleteMateria;