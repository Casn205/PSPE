// src/components/FacultyCard.jsx
const FacultyCard = ({ faculty, onClick }) => {
    return (
        <div
        onClick={onClick}
        className="cursor-pointer bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg shadow-lg transition-all duration-300"
      >
        <img
          src={faculty.image}
          alt={faculty.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{faculty.name}</h3>
        </div>
      </div>
      
    );
  };
  
  export default FacultyCard;
  