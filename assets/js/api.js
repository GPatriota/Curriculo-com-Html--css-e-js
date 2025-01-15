
async function fetchProfileData() {
    const url = 'https://gpatriota.github.io/Curriculo/curriculum.json';
    const response = await fetch(url);
    const profileData = await response.json();
    return profileData;
}
