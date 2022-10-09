//import bcrypt from 'bcryptjs';

const data = {
	// users: [
	// 	{
	// 		name: 'John',
	// 		email: 'admin@gmail.com',
	// 		password: bcrypt.hashSync('123456'),
	// 		isAdmin: true,
	// 	},
	// 	{
	// 		name: 'Alice',
	// 		email: 'alice@gmail.com',
	// 		password: bcrypt.hashSync('123'),
	// 		isAdmin: false,
	// 	},
	// ],
	categories: [
		{
			_id: '01',
			name: 'Laptop',
			description: '...',
		},
		{
			_id: '02',
			name: 'Smart Phone',
			description: '...',
		},
		{
			_id: '02',
			name: 'Tablet',
			description: '...',
		},
		{
			_id: '02',
			name: 'Smart Watch',
			description: '...',
		},
	],
	brands: [
		{
			_id: '01',
			CateID: '01',
			name: 'Asus',
			description: '...',
		},
		{
			_id: '02',
			CateID: '01',
			name: 'Dell',
			description: '...',
		},
		{
			_id: '03',
			CateID: '02',
			name: 'iPhone',
			description: '...',
		},
		{
			_id: '04',
			CateID: '02',
			name: 'SamSung',
			description: '...',
		},
		{
			_id: '05',
			CateID: '02',
			name: 'Xiaomi',
			description: '...',
		},
	],
	products: [
		{
			_id: '01',
			name: 'SAMSUNG Galaxy S20 FE',
			slug: 'SAMSUNG-Galaxy-S20-FE',
			category: 'Smart Phone',
			image: '/images/p1.jpg',
			price: 128,
			countInStock: 10,
			brand: 'SAMSUNG',
			cpu: 'Snapdragon 865',
			operatingSystem: 'Android 12',
			ram: 6,
			memoryStorage: 128,
			screenSize: 6.4,
			weight: 240,
			releasedDate: '02/10/2022',
			rating: 3.5,
			numReviews: 5,
			description:
				'Pro-Grade Camera: The New Samsung Galaxy S20 Fe Mobile Phone Features High-Powered Pro Lenses For Beautiful Portraits, Stunning Landscapes And Crisp Close-Ups In Any Light With Its 3X Optical Zoom',
		},
		{
			_id: '02',
			name: 'OnePlus 9 Winter Mist',
			slug: 'OnePlus-9-Winter-Mist',
			category: 'Smart Phone',
			image: '/images/p2.jpg',
			price: 499,
			countInStock: 20,
			brand: 'OnePlus',
			cpu: 'Snapdragon 865',
			operatingSystem: 'Android 11',
			ram: 6,
			memoryStorage: 128,
			screenSize: 6.55,
			weight: 300,
			releasedDate: '08/20/2021',
			rating: 4.5,
			numReviews: 16,
			description:
				'Hasselblad Camera for Mobile- Take your best shot with the OnePlus 9 5G’s Triple Camera system co-developed by Hasselblad, featuring a 48MP main camera, 50MP Ultra-Wide camera, and 2MP monochrome lens',
		},
		{
			_id: '03',
			name: '2022 Acer 15inch HD IPS Chromebook',
			slug: '2022-Acer-15inch-HD-IPS-Chromebook',
			category: 'Laptop',
			image: '/images/p3.jpg',
			price: 189,
			countInStock: 0,
			brand: 'Acer',
			cpu: 'Intel Core i9',
			operatingSystem: 'Chrome OS',
			ram: 4,
			memoryStorage: 1024,
			screenSize: 15.6,
			weight: 800,
			releasedDate: '08/20/2022',
			rating: 3.5,
			numReviews: 25,
			description:
				'15inch HD IPS LED Display(1366x768), Intel Graphics Intel Dual-Core Celeron Processor Up to 2.55GHz, 4GB RAM, 32GB Storage 2x USB Type-A, 2x USB Type-C, 1x Headphone/microphone, Micro SD Card Reader Super-Fast WiFi Up to 1300 Mbps, Bluetooth 5.0 Chrome OS',
		},

		{
			_id: '04',
			name: 'ASUS ROG Strix Scar 15',
			slug: 'ASUS-ROG-Strix-Scar-15',
			category: 'Laptop',
			image: '/images/p4.jpg',
			price: 1899,
			countInStock: 30,
			brand: 'ASUS',
			cpu: 'Intel Core i9',
			operatingSystem: 'Windows 11 Home',
			ram: 4,
			memoryStorage: 1024,
			screenSize: 15.6,
			weight: 800,
			releasedDate: '06/15/2022',
			rating: 4,
			numReviews: 10,
			description:
				'NVIDIA GeForce RTX 3070 Ti 8GB GDDR6 - ROG Boost up to 1460 MHz at 150W (125W plus 25W with Dynamic Boost)',
		},
	],
};
export default data;