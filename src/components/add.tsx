import Link from 'next/link';

const AddSubjectScreen = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center bg-pink-600 p-8 h-auto rounded-lg w-96 mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Adicionar Matérias</h2>
        <div className="flex flex-col space-y-4">
        </div>
        <input
          type="text"
          className="mt-4 px-4 py-2 border border-gray-400 rounded-lg w-full"
          placeholder="Nome da Matéria"
        />
        <input
          type="text"
          className="mt-4 px-4 py-2 border border-gray-400 rounded-lg w-full"
          placeholder="Professor responsável"
        />
        <button className="mt-4 px-6 py-3 bg-black rounded-full text-lg text-white hover:bg-gray-900 transition-colors">
          Adicionar Matéria
        </button>
        <Link href="/">
          <button className="mt-4 px-6 py-3 bg-gray-200 rounded-full text-lg">Voltar</button>
        </Link>
      </div>
    </div>
  );
};

export default AddSubjectScreen;
