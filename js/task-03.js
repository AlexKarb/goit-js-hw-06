const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ref = {
  gallery: document.querySelector('.gallery')
}

const createItemsOfGallery = array => array.map(({url, alt}) =>
 `<li>
  <img src="${url}" alt="${alt}" width="200px">
</li>`).join("")




ref.gallery.insertAdjacentHTML("afterbegin", createItemsOfGallery(images))
ref.gallery.style.display = 'flex';
ref.gallery.style.justifyContent = 'space-around';
ref.gallery.style.alignItems = 'center';
ref.gallery.style.listStyle = 'none';

