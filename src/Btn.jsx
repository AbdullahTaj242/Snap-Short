import React, { useState } from 'react';

function Btn() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [displayedImages, setDisplayedImages] = useState([]);

    const headings = {
        Mountain: 'Mountain Images',
        Beaches: 'Beaches Images',
        Birds: 'Birds Images',
        Food: 'Food Images',
    };

    const Images = {
        Mountain: [
            require('./mountainimg/53164264822_f3961d46e4_m.jpg'),
            require('./mountainimg/53164265542_f8eae88766_m.jpg'),
            require('./mountainimg/53164268737_2cde748368_m.jpg'),
            require('./mountainimg/53164268922_ed98580962_m.jpg'),
            require('./mountainimg/53164309352_3e4b7aa0f5_m.jpg'),
            require('./mountainimg/53164309352_3e4b7aa0f5_m.jpg'),
            require('./mountainimg/53164854346_9fd745244e_m.jpg'),
            require('./mountainimg/53164269707_3f1683f254_m.jpg'),
            require('./mountainimg/53165267066_9e83b13599_m.jpg'),
            require('./mountainimg/53165267066_9e83b13599_m.jpg'),
            require('./mountainimg/53165773848_8a0040272c_m.jpg'),
            require('./mountainimg/53165774838_edb0a6dccd_m.jpg'),
            require('./mountainimg/53165284125_beb97fd34b_m.jpg'),
            require('./mountainimg/53164702132_15d7b99bf6_m.jpg'),
            require('./mountainimg/53165488913_d2f833bbd9_m.jpg'),
            require('./mountainimg/53165286490_ef87a0b3dc_m.jpg'),
            require('./mountainimg/53165488913_d2f833bbd9_m.jpg'),
            require('./mountainimg/53164559752_1468f73546_m.jpg'),
            require('./mountainimg/53165267066_9e83b13599_m.jpg'),
            require('./mountainimg/53165338843_82b5d2be71_m.jpg'),
            require('./mountainimg/53165284125_beb97fd34b_m.jpg'),
            require('./mountainimg/53164377572_dbba330784_m.jpg'),
            require('./mountainimg/53165286490_ef87a0b3dc_m.jpg'),
            require('./mountainimg/53165338843_82b5d2be71_m.jpg'),
            require('./mountainimg/53164309352_3e4b7aa0f5_m.jpg'),

        ],
        Beaches: [
            require('./beachimg/34859500864_5e43cd60e1_m.jpg'),
            require('./beachimg/53164126272_a244e391a6_m.jpg'),
            require('./beachimg/53164126882_8f2a0f8648_m.jpg'),
            require('./beachimg/53164325707_1a21d027ec_m.jpg'),
            require('./beachimg/53164382717_d6ceb4c48c_m.jpg'),
            require('./beachimg/53164485467_be1d51b352_m.jpg'),
            require('./beachimg/53164485467_be1d51b352_m.jpg'),
            require('./beachimg/53164701819_39939224b9_m.jpg'),
            require('./beachimg/53164701819_39939224b9_m.jpg'),
            require('./beachimg/53164707516_b1f8511f2b_m.jpg'),
            require('./beachimg/53164907570_8ae1b26aeb_m.jpg'),
            require('./beachimg/53165075536_5c71bd022b_m.jpg'),
            require('./beachimg/53165075536_5c71bd022b_m.jpg'),
            require('./beachimg/53165135025_3101935285_m.jpg'),
            require('./beachimg/53165141850_e8e251a13a_m.jpg'),
            require('./beachimg/53165304664_57f0f8202a_m.jpg'),
            require('./beachimg/53165502645_710f0cb160_m.jpg'),
            require('./beachimg/53165193688_e8d37db442_m.jpg'),
            require('./beachimg/53165268664_32c91bfc88_m.jpg'),
            require('./beachimg/53165267066_9e83b13599_m.jpg'),
            require('./beachimg/53165141850_e8e251a13a_m.jpg'),
            require('./beachimg/53165191818_cf4e9b8ea5_m.jpg'),
            require('./beachimg/53165193688_e8d37db442_m.jpg'),
            require('./beachimg/53165504415_ae90daa5da_m.jpg'),
            require('./beachimg/53165193688_e8d37db442_m.jpg'),

        ],
        Birds: [
            require('./birdsimg/53164104897_e7acb43333_m.jpg'),
            require('./birdsimg/53164612952_eb34894a4a_m.jpg'),
            require('./birdsimg/53164628407_d904aee65f_m.jpg'),
            require('./birdsimg/53164753301_72e33e254d_m.jpg'),
            require('./birdsimg/53164645906_010fc081d3_m.jpg'),
            require('./birdsimg/53164775271_e1c51b5e21_m.jpg'),
            require('./birdsimg/53164888932_96ff839b70_m.jpg'),
            require('./birdsimg/53165091315_8ace8a5868_m.jpg'),
            require('./birdsimg/53165246964_32ccae04ea_m.jpg'),
            require('./birdsimg/53165580289_34e1a3799c_m.jpg'),
            require('./birdsimg/53165245238_c2484edfc0_m.jpg'),
            require('./birdsimg/53164104897_e7acb43333_m.jpg'),
            require('./birdsimg/53165914693_fa5ef73508_m.jpg'),
            require('./birdsimg/53164853842_c83e6985bc_m.jpg'),
            require('./birdsimg/53165298278_726cd30172_m.jpg'),
            require('./birdsimg/53165357151_5c751e66bf_m.jpg'),
            require('./birdsimg/53165245238_c2484edfc0_m.jpg'),
            require('./birdsimg/53165245238_c2484edfc0_m.jpg'),
            require('./birdsimg/53165612433_52c3ab2e5d_m.jpg'),
            require('./birdsimg/53165580289_34e1a3799c_m.jpg'),
            require('./birdsimg/53165357151_5c751e66bf_m.jpg'),
            require('./birdsimg/53164853842_c83e6985bc_m.jpg'),
            require('./birdsimg/53165612433_52c3ab2e5d_m.jpg'),
            require('./birdsimg/53165245238_c2484edfc0_m.jpg'),
            require('./birdsimg/53165245238_c2484edfc0_m.jpg'),

        ],
        Food: [
            require('./foodimg/53164196807_139bd44c2d_m.jpg'),
            require('./foodimg/53164196807_139bd44c2d_m.jpg'),
            require('./foodimg/53164094182_884e78c3b7_m.jpg'),
            require('./foodimg/53164856332_d64d3ebea7_m.jpg'),
            require('./foodimg/53165142025_69a62d8971_m.jpg'),
            require('./foodimg/53165219935_8dbbed240e_m.jpg'),
            require('./foodimg/53165227780_b8682e0e04_m.jpg'),
            require('./foodimg/53165269828_1f2a59cc41_m.jpg'),
            require('./foodimg/53165273303_a47d53d2e6_m.jpg'),
            require('./foodimg/53165421395_1a1d5e05cd_m.jpg'),
            require('./foodimg/53165864195_e123e0a4fe_m.jpg'),
            require('./foodimg/53165421395_1a1d5e05cd_m.jpg'),
            require('./foodimg/53165279048_7d787a5c35_m.jpg'),
            require('./foodimg/53164094182_884e78c3b7_m.jpg'),
            require('./foodimg/53165458291_b2f7e3c2fc_m.jpg'),
            require('./foodimg/53165458291_b2f7e3c2fc_m.jpg'),
            require('./foodimg/53164094182_884e78c3b7_m.jpg'),
            require('./foodimg/53165269828_1f2a59cc41_m.jpg'),
            require('./foodimg/53165279048_7d787a5c35_m.jpg'),
            require('./foodimg/53165222145_50300f2215_m.jpg'),
            require('./foodimg/53165279048_7d787a5c35_m.jpg'),
            require('./foodimg/53165279048_7d787a5c35_m.jpg'),
            require('./foodimg/53164094182_884e78c3b7_m.jpg'),
            require('./foodimg/53165864195_e123e0a4fe_m.jpg'),
            require('./foodimg/53165864195_e123e0a4fe_m.jpg'),




          
        ]

    }

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setDisplayedImages(Images[category]);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        if (selectedCategory) {
            const filteredImages = Images[selectedCategory].filter((image) =>
                image.includes(e.target.value)
            );
            setDisplayedImages(filteredImages);
        }
    };

    return (
        <>
            <div className="flex justify-center gap-5 pt-[40px]">
                {Object.keys(headings).map((category) => (
                    <button
                        key={category}
                        className={`w-[100px] h-[30px] text-white bg-[#051C33] ${selectedCategory === category ? 'bg-[#051C33]' : ''
                            }`}
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="flex justify-center pt-4">
                <input
                    type="text"
                    placeholder="Search Categories"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>
            {selectedCategory && (
                <div className="text-center mt-4">
                    <h2>{headings[selectedCategory]}</h2>
                    <div className="flex flex-wrap justify-center">
                        {displayedImages.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={selectedCategory}
                                className="m-2 w-60 h-56"
                            />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default Btn;