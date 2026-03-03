const d = {
  "list": [
    {
      "vids": [
        {
          "user": "JT",
          "link": "https://www.youtube.com/watch?v=kLlV43vJ1SE",
          "percent": 46,
          "hz": ""
        }
      ],
      "name": "The Yandere",
      "author": "Ben",
      "more": "none",
      "id": 63009517,
      "pass": "Free to copy",
      "percentToQualify": 46,
      "verificationVid": "https://www.youtube.com/watch?v=kLlV43vJ1SE"
    },
    {
      "vids": [],
      "name": "Yatagarasu",
      "author": "Ben",
      "more": "none",
      "id": 63009518,
      "pass": "Free to copy",
      "percentToQualify": 45,
      "verificationVid": "https://youtu.be/-p8Z_NU2GB0?si=L3Mmwk_ud5uzXOMl"
    },
    {
      "vids": [],
      "name": "Quantum Processing",
      "author": "Gabe",
      "more": "none",
      "id": 63009519,
      "pass": "Free to copy",
      "percentToQualify": 49,
      "verificationVid": "https://youtu.be/IaofML5KTdQ?si=jQ1Ig7Gzq-k7y1ZK"
    },
    {
      "vids": [],
      "name": "Auditory Breaker",
      "author": "Andrew",
      "more": "none",
      "id": 63009317,
      "pass": "Free to copy",
      "percentToQualify": 45,
      "verificationVid": ""
    },
    {
      "vids": [],
      "name": "Ouroboros Startpos 2",
      "author": "JT",
      "more": "none",
      "id": 63009520,
      "pass": "Free to copy",
      "percentToQualify": 64,
      "verificationVid": "https://youtu.be/CT84uKtqhYo?si=utIC9-V7tRXxmkbl"
    },
    {
      "vids": [],
      "name": "Dolos",
      "author": "JT",
      "more": "none",
      "id": 63009521,
      "pass": "Free to copy",
      "percentToQualify": 55,
      "verificationVid": "https://youtu.be/CT84uKtqhYo?si=utIC9-V7tRXxmkbl"
    },
    {
      "vids": [],
      "name": "Phobos",
      "author": "Ben",
      "more": "none",
      "id": 63009522,
      "pass": "Free to copy",
      "percentToQualify": 52,
      "verificationVid": "https://youtu.be/KrCrLQz05KA?si=uMGyR-54Bhy0zp3r"
    },
    {
      "vids": [],
      "name": "WHITEKNUCKLES",
      "author": "JT",
      "more": "none",
      "id": 63009523,
      "pass": "Free to copy",
      "percentToQualify": 52,
      "verificationVid": "https://youtu.be/2ImqD2LMlqs?si=60LCz3xXHz3ZM6Y8"
    },
    {
      "vids": [
        {
          "user": "JT",
          "link": "https://youtu.be/r7m4jtjTygk?si=_NZ302Cl-UXCWCvz",
          "percent": 100,
          "hz": "240hz"
        },
        {
          "user": "Andrew",
          "link": "",
          "percent": 100,
          "hz": "240hz"
        },
        {
          "user": "Ben",
          "link": "https://youtu.be/xAwz8OIA-_Q?si=NpYW1G4YzweSyBmk",
          "percent": 100,
          "hz": "240hz"
        }
      ],
      "name": "Bloodbath",
      "author": "Gabe",
      "more": "none",
      "id": 63009524,
      "pass": "Free to copy",
      "percentToQualify": 42,
      "verificationVid": "https://youtu.be/L2aKNNaGkRY"
    }

    
			{
	                       "vids": [
				    
			       ],
	                       "name": "Aftermath",
	                       "author": "Andrew",
	                       "more": "none",
	                       "id": 63009517,
	                       "pass": "Free to copy",
	                       "percentToQualify": 47,
	                       "verificationVid": " ",
	                       "key": 1
	                },
		/*=================================================================================*/
				
  ],
  "version": [1, 0, 0]
};

d.list.forEach((item, index) => {
  item.key = index;
});

const list = d.list;
const version = d.version;

