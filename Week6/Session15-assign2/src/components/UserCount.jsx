function UserCount({ count }) {
  return (
    <div className="flex justify-center mb-8">
      <div className="bg-purple-600 px-6 py-3 rounded-full shadow-lg">
        <p className="text-lg font-semibold">
          Users Added: {count}
        </p>
      </div>
    </div>
  );
}

export default UserCount;