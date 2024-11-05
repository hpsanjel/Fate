import React, { useState } from "react";
import PrimaryButton from "../Includes/PrimaryButton";

const jobsData = [
	{ id: 1, logo: "https://img.freepik.com/free-vector/colorful-letter-gradient-logo-design_474888-2309.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714953600&semt=ais", department: "Department A", position: "Documentation Officer", salary: "NPR 80,000", type: "Full Time" },
	{ id: 2, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeZElhEPuwr391eva2Yej1TuJl2OfyTT5Umcct8euvY9S7KX9_-joQF2VYzi2NebESAWU&usqp=CAU", department: "Department B", position: "Counselor", salary: "NPR 75,000", type: "Full Time" },
	{
		id: 3,
		logo: "data:image/jpeg;base64,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",
		department: "Department C",
		position: "Admission Officer",
		salary: "NPR 70,000",
		type: "Full Time",
	},
	{
		id: 4,
		logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX///8aGhoAAAAbGxseHh78/PwYGBgSEhIODg74+PghISH09PTw8PAUFBS2trYJCQnR0dHJycnh4eGbm5uwsLB5eXnp6emDg4M2Njarq6uNjY3BwcFiYmKQkJDQ0NBQUFBBQUEsLCxqampLS0va2tpYWFhEREShoaF8fHwzMzNsbGwoKCj3x2cMAAAPfElEQVR4nO1ciZaquBaFJMzzDCKOICr//38vJ4AEy+rXt2+BVbWyV/e1ZNBszskZEyVJQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEDgWyFN3z2ChWGfj+G7x7AorC2S979ZivYeEVk72+8ex2IwtpSgjOWt9e6RLASrAYIU+tZ491gWgXEaCMpYTX4jRaqiJiVHMFBEifLu8Xw5lITNQcdRmRS17LdRVO5MRfVTetJ7Kf42ilk/B5tUshs2F4lX/SaKyhXmoOzswRPajcYoos27h/WF2DAJkkMfsKVn3FOM3jysr0OvojgfI9J07/wuipHHJGjuHkfCwyDF4o3D+jpUjCB2dtyx9AJOQzVR/LZhfR3aXoKonB2tb70UcfnJbT8HkU5UIOgO7/1rH7DVOTBUif7TKRY6mU248KgPFH2zl+IxeN/ovgCtxgh6I8H66BB07V2932EmRXP3+f3fHrEGKoq90SukOWist+kpBh6TIs7r943wL1E4TIL6SDA8OLNopqeo4ttPpegyFcV6NrxPLzKWZ66+RP2By8+sTsWDBCeCmjzAfKKoHn4ixVI1McZEvw8phL2XJ5ijcXURhqucH1iAi1GPsepkNzrHUCUTxR63nyZFIxgwVA5pVohlHkQdYgC/v658WJvoR0Zy9laX5/g0mimQ7r488a1hbZ8kyKTYvYpmqAslzo+L5KyT95EgRDMfKcbIVGWi/TCKxv2FBPtoxn+61MWsnIO1bxesGikzGHX4ol5v3NFEEPNcVXycRzMuS0QA+reimLrJITdVTZO722Hb7uaNFyNRJ1bE6eZinLn60iQP8t73ieTqREWImKZJ2D8eQt3VnUgaySRB8ILp2ZlNRo5iqY4ShMI//iYU04RoNFPHWB0GhwkhKiXp91mgcnU4CUKwNtRoRmjnMZoJjoQ/oX6PGMA1PSiEmp7XjeOj/OTtpnXZ+JQMEY4gyynCXOWIYP3SUwxMwh+XsfMNglWl1cByYK07Zad8zBsuRTp2lpRM4wkOqW995KWIEasT725jY2o6eX57sJpBJZvKrCqzHGn9g+/aqXGmbDgJYpSMx+sjLyyCzrZkHWR1EJ02UsRa8+ZucYSoXhG09YuDp/aP3uPNv7LROYL6ffIk/sxp0I8wpF0vWIzOvHN5b7fYdUyVWsfMnuaamvNTZyZB78Q3RXczg0rQCSjCPHTyVJkoPt21MkIYP0GtfZZHIsThY5S+EvyQxlzhAjSXYqJIQUevh5qNfZoUVb2/jaJy1zHVqcrYT8NBV+6CipOg7HyYUQGaSdGjt5aY9EpubL3pM9/WEHeBAH3C98nEk46bhDOC+IVVLOdS9KgncfOhsGhvJ9fvXN/TZ1Ry9oBtdyKC9Wo6H/EE5fyVZ3uiCHc/LrOaR02HetG3UAwoA+xtjDPn78gkqBlBcnwdgLlPFFvuXNrw4n0DRQW68USvS06EXDewnamo85wjjXBntohoPEV7/zC3BFWffMCCCG/U15uNUU3FCbx/GJOW9bQfzD9PhJ4o6nw7MTzjieL6rdQCFExLpA33oIPpJBdhPrfV5oj1uRT5IlR6UKcPaT/9iIWQOL3ytONU4sxMwQtmaqtJoUuxkwx4KceZVcwo4lkRqp6yEHP1bvFB7XUnvZmDgj08szuX4CQVVhnNJBteLo9obE5xXoALb+NxlXtSq8AC0WEwACVSaUaInUcA6cr8HOTtY6mbJvV6dkdT5WaKN9u5FD1+1ta3xzmCV6XIIjZZhcVpQUNFokajBMuZBD3eQlCGkCHaHcaEYwhdYo6iPKPoT2UN4q1ZuqmZsTSZ9TSCuHx4aq7SAtnPbE1QOWipSl/OfM7wRBHxziWYspBVu8U9Q6w/d28Dj5fgo+s03BRFUVVKFn2JilmwWc0oqmRG8REWqMT8zLF+PdJ+CZCezA/PKi307L8ORTb6rHYzW+zOBXfkQ311MRiIicpEs3BsJ88k+JzaWSFFKinwEj6Rz2ZSnFdoJooqXq861QwlBz4HD268BL3mOespzeORgKU5HrvmOXefU5QvfC7CRffrdYs3fbTG1V6o2eMkiL3LhxJL6XUd8xamae6fGSrJSJFaWmJyIaDEKD7EeFipOlUO46Fef9A3P5/NwfxFQqgTzLwFve2DDGlG7UE3WNaopdVVU52lzDFCDj0HnldbqVtsXwa/bg4lQv9octVO51VCWCJNB4am7mkfZMjaG/n+lGRV65aBX9czHSir7N50lLxnOitt13ik8ASdgI2bI/qER4YvDUJwafaXSLKb/X7/qvpipZbxD9ZXMezarZqbjParUKwfCRLRjjEdmOVuEZLZSi58++9G3bDT2g/KuI2qDUNVtYUb+KE9LngIomYdRT1PlRSsnwMqE6OuLoRadtL9KUHFsNI6cNvN/Zzfjh1xPAh/PB0Af3qOebwdTpVbM55KHayR9BdcCYLoqHFhZhl+e7/9SQNXsesgrq6ns9mvyNCxabI2FjR7hueHWVPLdNiKjXsVrFUHTw+87cSyd6tYu0mx/43HopMqpNTuh1tHR64SZieBlvw5MKON1GNSrkNyVouBOhRC+03w/2eIFe7iKtnmTGYOCOyfaH3kaVJxH7I1motWp86/m2Cia8d9VYbWx2lCpxqVmhsll1snU5NEaYHM/oQbJ0zskZO//FyMNfLhy01Th9zovimo+UsBYb0DG3I97Y/9TCN/KrWXoE71vngAZ2y1FyMFr0itK9JMGn9SdCamYYonwyT6fzPtT4CJ1lVLF/xTlaifDYCZvxFfx2v+HWi79HSM0Uc9XRNY/cdS5VegejNFmThL14qv6iL69wcUl94CZ1zfLkV94aaGctXfTXHpnUVK+24pmnjpKmN58RbhyCJVDp/OeLVbOk5N796L8OYvAMkEcdAz6NGXLLGX/f9B/iWCs4f/PhQDocFPLnjI6fIDDf3amNUzKPwyrraHm4OA/ocvWmN7mOGekf76Cf8rkDEBRPn2WhVBnb6I3o0waJML1Go+aMxhhZTYCE5HhP9QkixSpVLTadZ3OCeR66f/VKph31PHp9xT5XnqttJOzbDdUiHgj0/4JTU61TQmtWOTUKk9CjH/AqmbIDR7luSy0vIwJXTvl6OHZPywhHjAzCKqHtK722FPpbaj2eR/ULGwzTXMr3tcsbto1WWVNMcPlnCEc2juWVWU/p9I7QXsIucWRDjbrxr/v4RihX7ptlF2vZ9O29Ppfs02UeuWuzq0jf8is1ewK/MRFhP0/uW2S2CXT4Xp1VdrrAPrNC4jxy8aBb8CxnUIGU15oe3ECj+pDMt4HH2cUMY306Xce/5KOnsHPz8cennbM7ZDadpbKBcu78kY2dfVqTn1hUw3AWSwLqi+sr+vqRIlyZDKFUmyUYxNkhnShp2t2F1Bsm3uBb3HTxIw/mmSRJJ17d9QZEnyYt1QOrT11IWsaYxGT1QgpGnUh8OjjJCH4D9Yv63pzEmEyhZp/epF20ToJhlnL7ekBrEeBcQkLWtRwD1l/ympjLaSTQOeC1MNH2mzJbojgt5pqGSZyO3BMNZ11CQN0mF9Vou80yYjOjVwPvHOUVVVqbKlVJnBcymPXDL22gEYylmVeJqZpqrmRAV9RIUUaD1DUzuxdiNiU2xD+b9MIhpmbQhaJocaGdqUGvxR0sGGVIawM2uHtJPim8PedGCog8FTzhBgjwy9YwrbGlBZI30L+n19wRB66Wmuf8KwX8pgLuQRR4b0tSeyASH0DNOBYfZgiGABo4+9Z4YR/ZQQeaToLf4TQ6TD8hPYWDxnaPkBI5VeyAoMMzQsygpUOlkow7beJTCdfKLjw+FYAcPbHt3h0nPHaWnn7tzOwbVyRZ5nZjs6m8oZQ+9wgLdn1Jg8QyM2Hd2B0r5yXzKqGRkmSO/7or7p3WEeMvvRWMAQ/kqA4TlGZkqHXBw4hj3o0I2KNRGvxoNhpwND1FToovj0i2YM72zDHIIV1pt+IeGy87AaLY4L6koZXojuwQYhyvjkB0FNGWq38IJaF+XpwZsY6vnhsI+ZHbSChD6PSgr0QYaMobcPMdpt0L3mtNRI+ngNk7PdrypXD4sQfDAMUL9ESKFCKdk8LJAGw+QsjXa0N+hwoVLKOYZH32ZJhlXXKTwgymrngDZT96AnwPAs7dE+RzG1RQ+G7RSQxvTxYlgpuRjDWDFoYk6ZbXfh7oQ0qprUHwbKgVl5sDQ0VrEVxtCHHZg7i2PILA2gRs4tBIaU1dFx2nB3AaPFGFLF8G4px9DXHomTVkmJBkq60CriGOlnmh/5Uu3QuYepsYC1bi3SS8n19AYYaseGgnp852gre6TtDTvXgaHTMxwMhEEV9nAnDuhEhODTPHSxJbvTz0p6BKlODI1m2jelV0YDy+o/2fLw1yh6QwG+4QQreky2uiYCVQWFLahTRENM01AzA9dHdNQQ01wQjWn2SH78xlmD6XUdBAVKBRk02VLx2jSkUcBhBlRrx5im5dYrojKEZN/ZLlSMqgtYmF6Apil1ERV977mOY3okLNxSSWO4wI0tqXRdQ7LhDCxmlxT6j0IPxo+sR/GLKB74hm7bf5YRw7L3MO7v7T2SdZwqNGZuRZSvuXifbVVwTT1qaGzonKj5evtqjOF/mgux949vVsbUKp0fH92Y/aFn/cmgw2mhrurslUzDMvFW/LmQIJIqUKZdssmAY+DCf/BTgpsEVDBMKtbyq3qi/nCZUmVXZiusZtihZ1nR6z59Nu3dw+e0n5Or/m5vFsNOLONuSAUwC+KeYRhJJViRIEmZbDaMoXFN+8NuIRlslEHEDKax39ivVyKEDx3Fzi11+3hm1c37KXP9KR2nzxiNMmyifn3ILkpAMXuGNpVnColxW6dXlqXfQ5ZFW1kZvZQhNbljVRmdUub553vClodxZy9JYGeQ14WJnYHWhtc6AXXclUoCFLJdaMN+9tLagBn0E3sHwU+QFBt4tU5S9coB2I032BhPrcKs36q78u/ZGr3dNtpNXxsKNmyXkx1INTC1CsZIoiICokax6V2Av2lBtKUlKaXBPsUoPwxccYefK3D0470sCKzoIfJC8dobYJSnwdXjfLvJDtC7gN3kv+Kns1O/LJIOjdVRcuscDXogRDV/SSnYdmkM6HSPYE1TWV6vo+ab/ATKVyBtmyPsZIG+HCwlk2XUNausFl4PRh1fz1MXa1vVv4vfALsO3Dh2g/qX9ikEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBL4b/geM/gFudGAwAwAAAABJRU5ErkJggg==",
		department: "Department D",
		position: "Japanese Language Instructor",
		salary: "NPR 85,000",
		type: "Part Time",
	},
];

const CareerPage = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredJobs, setFilteredJobs] = useState(jobsData);

	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = jobsData.filter((job) => job.department.toLowerCase().includes(term) || job.position.toLowerCase().includes(term) || job.salary.toLowerCase().includes(term) || job.type.toLowerCase().includes(term));
		setFilteredJobs(filtered);
	};

	return (
		<div className="min-h-screen bg-fatePrimary/10 mx-auto ">
			<div className="max-w-lg mx-6 sm:mx-auto flex relative">
				<input type="text" className="w-full focus:outline-none border-2 border-slate-300 focus:border-slate-500 bg-white rounded-full mt-8 p-4 mx-6" value={searchTerm} onChange={handleSearch} placeholder="Search for jobs..."></input>
				<i className="bi bi-search text-lg absolute top-12 right-10"></i>
			</div>

			<div className="p-8">
				<div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{filteredJobs.length > 0 ? (
							filteredJobs.map((job) => (
								<div key={job.id} className="relative bg-slate-100 rounded-lg shadow flex pt-8">
									<img src={`${job.logo}`} alt={`${job.department} Logo`} className="h-20 w-20 m-4 rounded-full object-cover hover:transform hover:scale-110" />

									<div className="w-full m-4 ">
										<div className=" flex justify-between">
											<h3 className="text-lg">{job.position}</h3>
											<i class="bi bi-three-dots-vertical"></i>
										</div>
										<p className="text-gray-600 text-sm">{job.department}</p>
										<div className=" flex justify-between">
											<p className="text-fatePrimary">{job.salary}</p>
											<div className="space-x-1">
												<button className="bg-fateSecondaryDark rounded-md px-2 py-1 text-xs text-white hover:bg-fatePrimary ">Apply</button>
											</div>
										</div>
									</div>
									<button className="absolute top-2 left-2 px-2 py-1 text-xs rounded-md text-black bg-fatePrimary/10 hover:bg-fatePrimary/30 ">{job.type}</button>
								</div>
							))
						) : (
							<p className="text-red-500 text-md">
								No jobs are currently available for your search word <span className="text-fatePrimary">{searchTerm}</span>
							</p>
						)}
					</div>
				</div>
				{/* 
				<div className="my-8">
					<h2 className="text-2xl font-semibold mb-4">Featured Jobs</h2>
					<div className="grid grid-cols-3 gap-4">
						{jobsData.slice(0, 3).map((job) => (
							<div key={job.id} className="bg-white p-4 rounded-lg shadow">
								<img src={`${job.logo}`} alt={`${job.department} Logo`} className="h-20 w-20 mx-auto mb-4" />
								<h3 className="text-lg font-semibold">{job.position}</h3>
								<p className="text-gray-600">{job.department}</p>
								<p className="text-gray-600">{job.salary}</p>
							</div>
						))}
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default CareerPage;
