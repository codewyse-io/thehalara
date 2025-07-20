<template>
<section class="track_order login_sec">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="track_orderForm login_page">
                    <h2>SIGN IN/REGISTER</h2>

                    <form action="">
                        <div class="fieldd">
                            <input type="email" id="email" name="email" placeholder="Enter Your Email">
                        </div>
                        <div class="sub_btn">
                            <input type="submit" value="Continue">
                        </div>
                    </form>
                    <div class="LoginRegisterInput_handlecountry__atRHJ" @click="openModal">
                        <div class="LoginRegisterInput_earth__8sOKx"></div>
                        <div class="LoginRegisterInput_earthText__2NfKD">{{ selectedCountry }}</div>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- modal  -->
<div class="select-country-modal" id="moodal">
    <div class="select-country-content">
        <div class="select-country-title">Country/Region</div>
        <label for="search" class="select-country-search-label">
            <div class="select-country-search">
                <span class="select-country-search-icon"></span>
                <span class="select-country-search-text">Search</span>
            </div>
            <input type="text" class="select-country-search-input" id="search" name="search" value="">
        </label>
        <div class="SelectCountry_countryList__3tZV2" bis_skin_checked="1">
            <div class="SelectCountry_countryItem__2q17V" bis_skin_checked="1">
                <div class="SelectCountry_isSelect__1bh14" bis_skin_checked="1"><span class="SelectCountry_icon__26CQl"></span><span class="SelectCountry_select__136ST">United States</span><span class="SelectCountry_current__2fe8I">Current</span></div>
                <div class="valueWrapper SelectCountry_valueWrapper__3AQDN" bis_skin_checked="1">
    <!-- Countries starting with A -->
    <div id="stickyContainer_A" class="stickyContainer SelectCountry_stickyContainer__ksjg2" bis_skin_checked="1">
        <div class="sticky SelectCountry_titleWordWrapper__3irhw" bis_skin_checked="1">
            <span id="A" class="sticky_sentinel--top   SelectCountry_stickyTop__fAexj"></span>
            <span id="A" class="sticky SelectCountry_titleWord__1FwqX">A</span>
        </div>
        <span class="SelectCountry_text__1xScW" @click="updateSelectedCountry('Aland Islands')">Aland Islands</span>
        <span class="SelectCountry_text__1xScW" @click="updateSelectedCountry('American Samoa')">American Samoa</span>
        <span class="SelectCountry_text__1xScW" @click="updateSelectedCountry('Andorra')">Andorra</span>
        <!-- Add more countries starting with A -->
    </div>

    <!-- Countries starting with B -->
    <div id="stickyContainer_B" class="stickyContainer SelectCountry_stickyContainer__ksjg2" bis_skin_checked="1">
        <div class="sticky SelectCountry_titleWordWrapper__3irhw" bis_skin_checked="1">
            <span id="B" class="sticky_sentinel--top   SelectCountry_stickyTop__fAexj"></span>
            <span id="B" class="sticky SelectCountry_titleWord__1FwqX">B</span>
        </div>
        <span class="SelectCountry_text__1xScW" @click="updateSelectedCountry('Bahamas')">Bahamas</span>
        <span class="SelectCountry_text__1xScW" @click="updateSelectedCountry('Bahrain')">Bahrain</span>
        <span class="SelectCountry_text__1xScW" @click="updateSelectedCountry('Bangladesh')">Bangladesh</span>
        <!-- Add more countries starting with B -->
    </div>

    <!-- Countries starting with C -->
    <div id="stickyContainer_C" class="stickyContainer SelectCountry_stickyContainer__ksjg2" bis_skin_checked="1">
        <div class="sticky SelectCountry_titleWordWrapper__3irhw" bis_skin_checked="1">
            <span id="C" class="sticky_sentinel--top   SelectCountry_stickyTop__fAexj"></span>
            <span id="C" class="sticky SelectCountry_titleWord__1FwqX">C</span>
        </div>
        <span class="SelectCountry_text__1xScW" @click="updateSelectedCountry('Cabo Verde')">Cabo Verde</span>
        <span class="SelectCountry_text__1xScW" @click="updateSelectedCountry('Cambodia')">Cambodia</span>
        <span class="SelectCountry_text__1xScW" @click="updateSelectedCountry('Canada')">Canada</span>
        <!-- Add more countries starting with C -->
    </div>
</div>

            </div>
            <div class="SelectCountry_wordList__2pJDo" bis_skin_checked="1"><span id="A" class="SelectCountry_wordItem__159IW SelectCountry_activeWord__ahoMw">A</span><span id="B" class="SelectCountry_wordItem__159IW">B</span><span id="C" class="SelectCountry_wordItem__159IW">C</span><span id="D" class="SelectCountry_wordItem__159IW">D</span><span id="E" class="SelectCountry_wordItem__159IW">E</span><span id="F" class="SelectCountry_wordItem__159IW">F</span><span id="G" class="SelectCountry_wordItem__159IW">G</span><span id="H" class="SelectCountry_wordItem__159IW">H</span><span id="I" class="SelectCountry_wordItem__159IW">I</span><span id="J" class="SelectCountry_wordItem__159IW">J</span><span id="K" class="SelectCountry_wordItem__159IW">K</span><span id="L" class="SelectCountry_wordItem__159IW">L</span><span id="M" class="SelectCountry_wordItem__159IW">M</span><span id="N" class="SelectCountry_wordItem__159IW">N</span><span id="O" class="SelectCountry_wordItem__159IW">O</span><span id="P" class="SelectCountry_wordItem__159IW">P</span><span id="Q" class="SelectCountry_wordItem__159IW">Q</span><span id="R" class="SelectCountry_wordItem__159IW">R</span><span id="S" class="SelectCountry_wordItem__159IW">S</span><span id="T" class="SelectCountry_wordItem__159IW">T</span><span id="U" class="SelectCountry_wordItem__159IW">U</span><span id="V" class="SelectCountry_wordItem__159IW">V</span><span id="W" class="SelectCountry_wordItem__159IW">W</span></div>
        </div>
    </div>
    <div class="close_modal_btn">
        <button type="button" class="close" @click="closeModal"><span aria-hidden="true">&times;</span></button>
    </div>
</div>
<div class="modal-mask"></div>
<!-- jdhsfksdjh -->

<FooterSection />
</template>

<script>
import FooterSection from "@/components/FooterSection.vue"

export default {
    name: 'AboutUs',
    components: {
        FooterSection,
    },
    data() {
        return {
            selectedCountry: 'United States' // Default country text
        };
    },
    methods: {
        openModal() {
            const modal = document.getElementById('moodal');
            if (modal) {
                modal.classList.add('show');
                modal.style.display = 'block';
            }
        },

        closeModal() {
            const modal = document.getElementById('moodal');
            if (modal) {
                modal.classList.remove('show');
                modal.style.display = 'none';
            }
        },
        updateSelectedCountry(country) {
        this.selectedCountry = country;
        this.closeModal();
    }
    }

};
</script>

<style scoped>
.select-country-modal {
    display: none;
    opacity: 0;
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    width: 100%;
    height: 100%;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    transform: translateY(0);
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    transition: all .3s;
}

.select-country-content {
    height: 100%;
    width: 100%;
    background: #fff;
    padding: 15px 10px;
    display: -moz-box;
    display: flex;
    position: relative;
    -moz-box-align: start;
    align-items: flex-start;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    flex-direction: column;
    -moz-box-flex: 1;
    flex: 1 1;
    flex-shrink: 0;
    overflow: hidden;
}

.select-country-title {
    width: 100%;
    display: -moz-box;
    display: flex;
    -moz-box-pack: center;
    justify-content: center;
    -moz-box-align: center;
    align-items: center;
    font-size: 16px;
    font-family: NexaBold;
    font-weight: 700;
    color: #222;
    line-height: 25px;
}

label.select-country-search-label {
    margin-top: 24px;
    width: 100%;
    height: 36px;
    background: #f2f2f2;
    border-radius: 18px;
    position: relative;
}

.select-country-search {
    position: absolute;
    height: 36px;
    display: -moz-box;
    display: flex;
    -moz-box-pack: start;
    justify-content: flex-start;
    -moz-box-align: center;
    align-items: center;
    left: 15px;
    font-size: 12px;
    font-weight: 300;
    color: #888;
}

span.select-country-search-icon {
    display: inline-block;
    height: 15px;
    width: 15px;
    background-image: url(https://mpi.halarastatic.com/upload/online/51/00/06/02/23/_1642765603.png);
    background-size: cover;
    margin-right: 10px;
}

.select-country-list {
    display: -moz-box;
    display: flex;
    -moz-box-orient: horizontal;
    -moz-box-direction: normal;
    flex-direction: row;
    width: 100%;
    height: 100%;
    flex-shrink: 0;
}

.select-country-modal.show {
    display: block;
    position: absolute;
    top: 430px;
    opacity: 1;
    width: 60%;
    margin: 0 auto;
    border-radius: 10px;
    box-shadow: 0 0 10px #000;
}

.select-country-search input {
    width: 100%;
    background: transparent !important;
}

.select-country-search input#search {
    width: 100%;
    height: 36px;
    border: none;
    background: #f2f2f2;
    border-radius: 18px;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
    text-indent: 15px;
}

input#search {
    width: 100%;
    height: 36px;
    border: none;
    background: #f2f2f2;
    border-radius: 18px;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
    text-indent: 15px;
}

.select-country-content {
    border-radius: 30px;
}

.SelectCountry_countryList__3tZV2 {
    display: -moz-box;
    display: flex;
    -moz-box-orient: horizontal;
    -moz-box-direction: normal;
    flex-direction: row;
    width: 100%;
    height: 100%;
    flex-shrink: 0;
}

.SelectCountry_countryList__3tZV2 .SelectCountry_countryItem__2q17V {
    padding: 0 0 10px 5px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -moz-box-flex: 1;
    flex: 1 1;
    flex-shrink: 0;
}

.SelectCountry_countryList__3tZV2 .SelectCountry_countryItem__2q17V .SelectCountry_isSelect__1bh14 {
    padding: 18px 0;
    display: -moz-box;
    display: flex;
    -moz-box-align: center;
    align-items: center;
    flex-shrink: 0;
}

.SelectCountry_countryList__3tZV2 .SelectCountry_countryItem__2q17V .SelectCountry_isSelect__1bh14 .SelectCountry_icon__26CQl {
    margin-right: 10px;
    height: 15px;
    width: 15px;
    background-size: cover;
    background-image: url(https://mpi.halarastatic.com/upload/online/55/10/06/02/23/_3530247786.png);
}

.SelectCountry_countryList__3tZV2 .SelectCountry_countryItem__2q17V .SelectCountry_isSelect__1bh14 .SelectCountry_select__136ST {
    font-size: 14px;
    font-weight: 700;
    font-family: NexaBold;
    color: #222;
    line-height: 21px;
}

.SelectCountry_countryList__3tZV2 .SelectCountry_countryItem__2q17V .SelectCountry_isSelect__1bh14 .SelectCountry_current__2fe8I {
    font-size: 13px;
    font-weight: 300;
    color: #888;
    line-height: 20px;
    padding-left: 5px;
}

.SelectCountry_countryList__3tZV2 .SelectCountry_countryItem__2q17V .SelectCountry_valueWrapper__3AQDN {
    overflow-y: auto;
    -moz-box-flex: 1;
    flex: 1 1;
    height: -moz-calc(100% - 118px);
    height: calc(100% - 118px);
    flex-shrink: 0;
    padding-bottom: 200px;
    scrollbar-width: none;
    -ms-overflow-style: none;
    position: relative;
}

.SelectCountry_countryList__3tZV2 .SelectCountry_countryItem__2q17V .SelectCountry_valueWrapper__3AQDN .SelectCountry_stickyContainer__ksjg2 {
    position: relative;
    flex-shrink: 0;
}

.SelectCountry_countryList__3tZV2 .SelectCountry_countryItem__2q17V .SelectCountry_valueWrapper__3AQDN .SelectCountry_stickyContainer__ksjg2 .SelectCountry_titleWordWrapper__3irhw {
    position: sticky;
    top: -1px;
}

.SelectCountry_countryList__3tZV2 .SelectCountry_countryItem__2q17V .SelectCountry_valueWrapper__3AQDN .SelectCountry_stickyContainer__ksjg2 .SelectCountry_stickyTop__fAexj {
    position: absolute;
    height: 1px;
    width: 100%;
    top: -38px;
    z-index: -1;
}

.SelectCountry_countryList__3tZV2 .SelectCountry_countryItem__2q17V .SelectCountry_valueWrapper__3AQDN .SelectCountry_stickyContainer__ksjg2 .SelectCountry_titleWord__1FwqX {
    display: block;
    padding: 8px 0 5px;
    font-size: 16px;
    font-weight: 700;
    font-family: NexaBold;
    color: #222;
    line-height: 25px;
    background-color: #fff;
    width: 100%;
    flex-shrink: 0;
    position: relative;
    left: 360px;
}

.SelectCountry_countryList__3tZV2 .SelectCountry_countryItem__2q17V .SelectCountry_valueWrapper__3AQDN .SelectCountry_text__1xScW {
    display: -moz-box;
    display: flex;
    -moz-box-align: center;
    align-items: center;
    height: 54px;
    font-size: 14px;
    color: #222;
    line-height: 21px;
    border-bottom: 1px solid #ebebeb;
    cursor: pointer;
}

.SelectCountry_countryList__3tZV2 .SelectCountry_countryItem__2q17V .SelectCountry_valueWrapper__3AQDN .SelectCountry_text__1xScW {
    display: -moz-box;
    display: flex;
    -moz-box-align: center;
    align-items: center;
    height: 54px;
    font-size: 14px;
    color: #222;
    line-height: 21px;
    border-bottom: 1px solid #ebebeb;
    cursor: pointer;
}

.SelectCountry_countryList__3tZV2 .SelectCountry_countryItem__2q17V .SelectCountry_valueWrapper__3AQDN .SelectCountry_text__1xScW {
    display: -moz-box;
    display: flex;
    -moz-box-align: center;
    align-items: center;
    height: 54px;
    font-size: 14px;
    color: #222;
    line-height: 21px;
    border-bottom: 1px solid #ebebeb;
    cursor: pointer;
}

.SelectCountry_wordList__2pJDo {
    display: -moz-box;
    display: flex;
    width: 21px;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    flex-direction: column;
    padding-top: 22px;
    overflow-y: auto;
    height: -moz-calc(100% - 65px);
    height: calc(100% - 65px);
    padding-bottom: 50px;
    flex-shrink: 0;
    scrollbar-width: none;
    -ms-overflow-style: none;
}

.SelectCountry_wordList__2pJDo .SelectCountry_wordItem__159IW {
    display: inline-block;
    height: 16px;
    width: 21px;
    display: -moz-box;
    display: flex;
    -moz-box-pack: end;
    justify-content: flex-end;
    font-size: 12px;
    font-weight: 700;
    font-family: NexaBold;
    color: #888;
    line-height: 18px;
    flex-shrink: 0;
    cursor: pointer;
}

.SelectCountry_wordList__2pJDo .SelectCountry_activeWord__ahoMw {
    color: #222;
}

.close_modal_btn {
    position: absolute;
    top: 2px;
    left: unset;
    right: 10px;
}

.close_modal_btn button.close {
    border: 0;
    background: transparent;
    font-size: 27px;
}
</style>
