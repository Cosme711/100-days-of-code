<template>
    <div class="search-bar">
        <div class="location" @click="toggleMenu">{{city ? `${city}, Finland` : 'Select city'}}</div>
        <div class="add-guest" @click="toggleMenu">{{adults + children === 0 ? 'Add guests' : `${adults + children} guests`}}</div>
        <div class="search" @click="toggleMenu">
            <span class="material-icons">search</span>
        </div>
        <div class="close" v-if="city || adults + children !== 0" @click="clearResult">
            <span class="material-icons">close</span>
        </div>
    </div>

    <teleport to="#modal">
        <Modal v-model:show="showModal" >
            <div class="modal" >
                <div class="modal__block" >
                    <button @click="showModal = false"><span class="material-icons">close</span></button>
                    <div class="modal__block__search-bar">

                        <div class="modal__block__search-bar__location">
                            <div class="modal__block__search-bar__location__p" @click="tab = 0">
                                <p>LOCATION</p>
                                <div>
                                    {{ city }} {{ country }}
                                </div>   
                            </div>
                        </div>

                        <div class="modal__block__search-bar__guest" @click="tab = 1">
                            <div class="modal__block__search-bar__location__p">
                                <p>GUESTS</p>
                                <div>
                                    {{ adults + children }} guests
                                </div>       
                            </div>
                        </div>
                        <div class="modal__block__search-bar__search-btn">
                            <a @click="search()">
                                <span class="material-icons">search</span>
                                <p>Search</p>
                            </a>
                        </div>
                    </div>
                    <div class="modal__dropdown">
                        <div class="modal__dropdown-location" v-show="tab === 0">
                            <ul>
                                <li v-for="(city, index) in store.getCities()" :key="index" @click="toggleCity(city.city)">
                                    <span class="material-icons">place</span>
                                    <span>{{city.city}}, {{city.country}}</span>
                                </li>
                            </ul>
                        </div>

                        <div class="modal__dropdown-guest" v-show="tab === 1">
                            <div class="adults">
                                <div class="adults__text">
                                    <p>Adults</p>
                                    <p>Ages 13 or above</p>
                                </div>
                                <Counter v-model="adults"/>
                            </div>

                            <div class="children">
                                <div class="children__text">
                                    <p>Children</p>
                                    <p>Ages 2-12</p>
                                </div>
                                <Counter v-model="children"/>
                            </div>

                        </div>
                    </div>
                    <div class="modal__block__search-bar__search-btn__responsive">
                        <a @click="search()">
                            <span class="material-icons">search</span>
                            <p>Search</p>
                        </a>
                    </div>
                </div>
            </div>
        </Modal>
    </teleport>
</template>

<script>
import Modal from "../components/Modal";
import Counter from '../components/Counter';
import {injectStore} from "@/store/state";
import { reactive, toRefs } from "vue";


export default {
    name: "SearchBar",
    components: { Modal, Counter },
    setup() {

        const store = injectStore()

        const data = reactive({
            showModal: false,
            tab: 0,
            adults: 0,
            children: 0,
            city: undefined,
            country: store.getCities()[0].country
        })

        const toggleMenu = () => {
            data.tab = 0
            data.showModal = !data.showModal
        }

        const toggleCity = (city) => {
            data.city = city
        }

        const clearResult = () => {
            store.filterByCity({})
            data.city = undefined
            data.adults = 0
            data.children = 0
        }

        const search = () => {
            store.filterByCity({
                city: data.city,
                guests: data.adults + data.children
            })
            toggleMenu()
        }

        return {
            ...toRefs(data), store,
            toggleMenu, toggleCity, search, clearResult
        }
    }

}
</script>

<style lang="scss" scoped>
.search-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    cursor: pointer;
    @include mobile {
        font-size: 12px;
        
    }
    .location, .add-guest {
        padding: 1rem;
        border-right: 1px solid rgba(0, 0, 0, 0.1);
        p {
            margin: 0;
        }
    }
    .search {
        span {
            padding: 1rem;
            color: #EB5757;
        }
    }
    .close {
        display: flex;
        align-items: center;
        padding: 1rem;
        border-left: 1px solid rgba(0, 0, 0, 0.1);
    }
}

.modal {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 999;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    .modal__block {
        font-family: 'Mulish', sans-serif;
        width: 100%;
        position: absolute;
        top: 0;
        background: white;
        button {
            position: absolute;
            left: 1rem;
            top: 1rem;
            border: none;
            background-color: white;
            &:focus {
                outline: none;
            }
            span {
                font-size: 40px;
            }
        }
        .modal__block__search-bar {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            width: 80%;
            margin: auto;
            margin-top: 4rem;
            box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
            border-radius: 16px;
            @include mobile {
                grid-template-columns: repeat(1, minmax(0, 1fr));
            }
            .modal__block__search-bar__location__p {
                padding: 0.75rem 1.25rem;
                font-size: 14px;
                font-weight: 400;
                :first-child {
                    font-size: 9px;
                    font-weight: 800;
                }
                :last-child {
                    margin-top: 4px;
                }
            }
            .modal__block__search-bar__location,
            .modal__block__search-bar__guest {
                border-right: 1px solid rgba(0, 0, 0, 0.1);
                cursor: pointer;
            }
            @include mobile {
                .modal__block__search-bar__location {
                    border-right: 0;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                }
                .modal__block__search-bar__guest {
                    border-right: 0;
                }
            }
            .modal__block__search-bar__search-btn {
                display: flex;
                justify-content: center;
                align-items: center;
                a {
                    display: flex;
                    background-color: #EB5757;
                    padding: 0.75rem 1.5rem;
                    border-radius: 16px;
                    color: white;
                    cursor: pointer;
                    :last-child {
                        margin-left: 10px;
                    }
                @include mobile {
                    display: none;
                }
                }
            }

        }
        .modal__dropdown {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            width: 80%;
            box-sizing: border-box;
            margin: auto;
            padding-top: 20px;
            @include mobile {
                grid-template-columns: 1fr;
            }
            .modal__dropdown-location {
                grid-column: 1;
                ul {
                    padding: 0 0 0 10px;
                    li {
                        display: flex;
                        align-items: center;
                        padding: 12px 0;
                        cursor: pointer;
                        span {
                            margin-left: 5px;
                        }
                    }
                }
            }
            .modal__dropdown-guest {
                grid-column: 2;
                margin-bottom: 30px;
                .adults, .children {
                    font-size: 18px;
                    margin-top: 20px;
                    height: 5rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .adults__text, .children__text {
                        :first-child {
                            font-weight: 700;
                        }
                        :last-child {
                            font-weight: 400;
                            color: grey;
                        }
                    }
                }
                .children {
                    margin-top: 2.5rem;
                }
                @include mobile {
                    grid-column: 1;
                }
            }
        }
        .modal__block__search-bar__search-btn__responsive {
            display: flex;
            justify-content: center;
            align-items: center;
            display: none;
            margin: 1rem 0 2rem 0;
            a {
                display: flex;
                background-color: #EB5757;
                padding: 0.75rem 1.5rem;
                border-radius: 16px;
                color: white;
                cursor: pointer;
                :last-child {
                    margin-left: 10px;
                }
            }
            @include mobile {
                display:flex;
            }
        }
    }
}

</style>