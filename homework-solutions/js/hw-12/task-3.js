async function getUserData() {
    try {
        const userResponse = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!userResponse.ok) throw new Error("Failed to fetch users data");
        const users = await userResponse.json();

        const [albumsResponse, photosResponse] = await Promise.all(
            [
            fetch ("https://jsonplaceholder.typicode.com/albums"),
            fetch("https://jsonplaceholder.typicode.com/photos"),
        ]
    );
    if (!albumsResponse.ok || !photosResponse.ok) throw new Error("Failed to fetch albums or photors");

    const albums = await albumsResponse.json();
    const photos = await photosResponse.json();

    users.forEach((user) => {
        console.log(`\n${user.id}. Name: ${user.name}`);
        console.log(`Email: ${user.email}`);
        console.log(`Phone: ${user.phone}`);
        console.log(`Company: ${user.company.name}`);
        console.log(`Albums:`);

        const userAlbums = albums.filter((album) => album.userId === user.id);

        userAlbums.forEach((album) => {
            const photoCounter = photos.filter((photo) => photo.albumId === album.id).length;
            console.log(`${album.title} (${photoCounter} photos)`);
        })

        console.log(`------------------------------------------------------------`);
    });
    } catch (error) {
        console.error(error);
    } finally {
        console.log("Function execution completed")
    }
}

getUserData();