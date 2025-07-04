import { useState } from "react";

const CategoryForm = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, description, image });
        // Upload logic here
    };

    return (
        <div className="mx-2 mt-2">
            <div className="row">
                <div className="card col-md-8 form-container">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="image" className="form-label">
                                    <img
                                        src={image ? URL.createObjectURL(image) : "https://placehold.co/48x48"}
                                        alt="Preview"
                                        width={48}
                                    />
                                </label>
                                <input
                                    type="file"
                                    name="image"
                                    id="image"
                                    className="form-control"
                                    hidden
                                    onChange={(e) => setImage(e.target.files[0])}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="form-control"
                                    placeholder="Category Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea
                                    rows={5}
                                    name="description"
                                    id="description"
                                    className="form-control"
                                    placeholder="write content here..."
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="bgcolor" className="form-label">Background color </label>
                                <br />
                                <input type="color" name="bgcolor" id="bgcolor" placeholder="#ffffff" />
                            </div>
                            <button type="submit" className="btn btn-warning w-100" >Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryForm;
