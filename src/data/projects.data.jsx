import nethizerCover from '../assets/images/projects/nethizer/nethizer-cover.png'
import nethizer1 from '../assets/images/projects/nethizer/nth-1.png'
import nethizer2 from '../assets/images/projects/nethizer/nth-2.png'
import nethizer3 from '../assets/images/projects/nethizer/nth-3.png'

import bongocatCover from '../assets/images/projects/bongocat/bongocat-cover.png'
import bongocatCover720 from '../assets/images/projects/bongocat/bongocat-cover-720.png'

import mechaniktgCover from '../assets/images/projects/mechaniktg/mechaniktg-cover.png'
import mtg1 from '../assets/images/projects/mechaniktg/mtg-1.png'
import mtg2 from '../assets/images/projects/mechaniktg/mtg-2.png'
import mtg3 from '../assets/images/projects/mechaniktg/mtg-3.png'
import mtg4 from '../assets/images/projects/mechaniktg/mtg-4.png'

import mergeitCover from '../assets/images/projects/mergeit/mergeit-cover.png'
import mit1 from '../assets/images/projects/mergeit/mit-1.png'
import mit2 from '../assets/images/projects/mergeit/mit-2.png'

import warzywniokCover from '../assets/images/projects/warzywniok/thumbnail.png'

import xdddCover from '../assets/images/projects/xddd/thumbnail.png'

import parafiaCover from '../assets/images/projects/parafiatapkowice/thumbnail.png'

import gornachataCover from '../assets/images/projects/gornachata/thumbnail.png'

const projectsData = [
	{
		id: 1,
		name: 'bongocat',
		thumbnail: bongocatCover,
		type: 'generator',
		date: 'December 29, 2021',
		role: 'Developer & Designer',
		path: 'bongocat',
		links: [
			{
				name: 'Website',
				url: 'https://bongocat.xyz',
				icon:
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path opacity="0.4"
									d="M6.37493 17.4249C6.34993 17.4249 6.31659 17.4416 6.29159 17.4416C4.67493 16.6416 3.35826 15.3166 2.54993 13.6999C2.54993 13.6749 2.56659 13.6416 2.56659 13.6166C3.58326 13.9166 4.63326 14.1416 5.67493 14.3166C5.85826 15.3666 6.07493 16.4082 6.37493 17.4249Z"
									fill="#FE481C"/>
						<path opacity="0.4"
									d="M17.45 13.7082C16.625 15.3666 15.25 16.7082 13.575 17.5166C13.8916 16.4582 14.1583 15.3916 14.3333 14.3166C15.3833 14.1416 16.4166 13.9166 17.4333 13.6166C17.425 13.6499 17.45 13.6832 17.45 13.7082Z"
									fill="#FE481C"/>
						<path opacity="0.4"
									d="M17.5166 6.42494C16.4666 6.10828 15.4083 5.84994 14.3333 5.66661C14.1583 4.59161 13.9 3.52494 13.575 2.48328C15.3 3.30828 16.6916 4.69994 17.5166 6.42494Z"
									fill="#FE481C"/>
						<path opacity="0.4"
									d="M6.37494 2.57493C6.07494 3.59159 5.85828 4.62493 5.68328 5.67493C4.60828 5.84159 3.54161 6.10826 2.48328 6.42493C3.29161 4.74993 4.63328 3.37493 6.29161 2.54993C6.31661 2.54993 6.34994 2.57493 6.37494 2.57493Z"
									fill="#FE481C"/>
						<path
							d="M12.9083 5.49163C10.975 5.27496 9.02501 5.27496 7.09167 5.49163C7.30001 4.34996 7.56667 3.20829 7.94167 2.10829C7.95834 2.04163 7.95001 1.99163 7.95834 1.92496C8.61667 1.76663 9.29167 1.66663 10 1.66663C10.7 1.66663 11.3833 1.76663 12.0333 1.92496C12.0417 1.99163 12.0417 2.04163 12.0583 2.10829C12.4333 3.21663 12.7 4.34996 12.9083 5.49163Z"
							fill="#FE481C"/>
						<path
							d="M5.49163 12.9083C4.34163 12.7 3.20829 12.4333 2.10829 12.0583C2.04163 12.0417 1.99163 12.05 1.92496 12.0417C1.76663 11.3833 1.66663 10.7083 1.66663 10C1.66663 9.30001 1.76663 8.61667 1.92496 7.96667C1.99163 7.95834 2.04163 7.95834 2.10829 7.94167C3.21663 7.57501 4.34163 7.30001 5.49163 7.09167C5.28329 9.02501 5.28329 10.975 5.49163 12.9083Z"
							fill="#FE481C"/>
						<path
							d="M18.3333 10C18.3333 10.7083 18.2333 11.3833 18.075 12.0417C18.0083 12.05 17.9583 12.0417 17.8916 12.0583C16.7833 12.425 15.65 12.7 14.5083 12.9083C14.725 10.975 14.725 9.02501 14.5083 7.09167C15.65 7.30001 16.7916 7.56667 17.8916 7.94167C17.9583 7.95834 18.0083 7.96667 18.075 7.96667C18.2333 8.62501 18.3333 9.30001 18.3333 10Z"
							fill="#FE481C"/>
						<path
							d="M12.9083 14.5083C12.7 15.6583 12.4333 16.7916 12.0583 17.8916C12.0417 17.9583 12.0417 18.0083 12.0333 18.075C11.3833 18.2333 10.7 18.3333 10 18.3333C9.29167 18.3333 8.61667 18.2333 7.95834 18.075C7.95001 18.0083 7.95834 17.9583 7.94167 17.8916C7.57501 16.7833 7.30001 15.6583 7.09167 14.5083C8.05834 14.6166 9.02501 14.6916 10 14.6916C10.975 14.6916 11.95 14.6166 12.9083 14.5083Z"
							fill="#FE481C"/>
						<path
							d="M13.1361 13.1361C11.0518 13.399 8.9481 13.399 6.86385 13.1361C6.60088 11.0518 6.60088 8.9481 6.86385 6.86385C8.9481 6.60088 11.0518 6.60088 13.1361 6.86385C13.399 8.9481 13.399 11.0518 13.1361 13.1361Z"
							fill="#FE481C"/>
					</svg>,
			},
			{
				name: 'GitHub',
				url: 'https://github.com/rokartur/bongocat',
				icon:
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clipPath="url(#clip0_734_337)">
							<path
								d="M6.68952 16.104C6.68952 16.1867 6.59677 16.2529 6.47984 16.2529C6.34677 16.2653 6.25403 16.1991 6.25403 16.104C6.25403 16.0213 6.34677 15.9551 6.46371 15.9551C6.58468 15.9427 6.68952 16.0089 6.68952 16.104ZM5.43548 15.9179C5.40726 16.0006 5.4879 16.0957 5.60887 16.1205C5.71371 16.1619 5.83468 16.1205 5.85887 16.0378C5.88306 15.9551 5.80645 15.86 5.68548 15.8228C5.58064 15.7938 5.46371 15.8352 5.43548 15.9179ZM7.21774 15.8476C7.10081 15.8765 7.02016 15.9551 7.03226 16.0502C7.04435 16.1329 7.14919 16.1867 7.27016 16.1577C7.3871 16.1288 7.46774 16.0502 7.45564 15.9675C7.44355 15.8889 7.33468 15.8352 7.21774 15.8476ZM9.87097 0C4.27823 0 0 4.35477 0 10.0908C0 14.6772 2.81452 18.6019 6.83468 19.9832C7.35081 20.0783 7.53226 19.7516 7.53226 19.4827C7.53226 19.2263 7.52016 17.812 7.52016 16.9435C7.52016 16.9435 4.69758 17.5638 4.10484 15.7111C4.10484 15.7111 3.64516 14.5076 2.98387 14.1975C2.98387 14.1975 2.06048 13.5482 3.04839 13.5606C3.04839 13.5606 4.05242 13.6433 4.60484 14.6276C5.4879 16.2239 6.96774 15.7649 7.54435 15.4919C7.6371 14.8302 7.89919 14.3712 8.18952 14.0982C5.93548 13.8418 3.66129 13.5068 3.66129 9.52839C3.66129 8.3911 3.96774 7.82039 4.6129 7.09253C4.50806 6.82372 4.16532 5.71538 4.71774 4.28447C5.56048 4.01565 7.5 5.40108 7.5 5.40108C8.30645 5.16948 9.17339 5.04955 10.0323 5.04955C10.8911 5.04955 11.7581 5.16948 12.5645 5.40108C12.5645 5.40108 14.504 4.01152 15.3468 4.28447C15.8992 5.71951 15.5565 6.82372 15.4516 7.09253C16.0968 7.82453 16.4919 8.39524 16.4919 9.52839C16.4919 13.5192 14.1169 13.8377 11.8629 14.0982C12.2339 14.4249 12.5484 15.0453 12.5484 16.0171C12.5484 17.4108 12.5363 19.1354 12.5363 19.4745C12.5363 19.7433 12.7218 20.07 13.2339 19.9749C17.2661 18.6019 20 14.6772 20 10.0908C20 4.35477 15.4637 0 9.87097 0ZM3.91935 14.2636C3.86694 14.305 3.87903 14.4001 3.94758 14.4787C4.0121 14.5449 4.10484 14.5738 4.15726 14.52C4.20968 14.4787 4.19758 14.3836 4.12903 14.305C4.06452 14.2388 3.97177 14.2099 3.91935 14.2636ZM3.48387 13.9287C3.45565 13.9824 3.49597 14.0486 3.57661 14.0899C3.64113 14.1313 3.72177 14.1189 3.75 14.061C3.77823 14.0072 3.7379 13.9411 3.65726 13.8997C3.57661 13.8749 3.5121 13.8873 3.48387 13.9287ZM4.79032 15.4009C4.72581 15.4547 4.75 15.5788 4.84274 15.6573C4.93548 15.7524 5.05242 15.7649 5.10484 15.6987C5.15726 15.6449 5.13306 15.5209 5.05242 15.4423C4.96371 15.3472 4.84274 15.3348 4.79032 15.4009ZM4.33065 14.793C4.26613 14.8343 4.26613 14.9419 4.33065 15.037C4.39516 15.1321 4.50403 15.1735 4.55645 15.1321C4.62097 15.0783 4.62097 14.9708 4.55645 14.8757C4.5 14.7806 4.39516 14.7392 4.33065 14.793Z"
								fill="#FE481C"/>
						</g>
						<defs>
							<clipPath id="clip0_734_337">
								<rect width="20" height="20" fill="white"/>
							</clipPath>
						</defs>
					</svg>
				,
			},
		],
		images: [
			{
				src: bongocatCover720,
				width: 720,
				height: 431,
			},
		],
	},
	{
		id: 2,
		name: 'Nethizer',
		thumbnail: nethizerCover,
		type: 'website',
		date: 'April 29, 2022',
		role: 'Developer & Designer',
		path: 'nethizer',
		links: [
			{
				name: 'Design in Figma',
				url: 'https://www.figma.com/file/ZFVCu7wBQwCggt84ISD4Qf/nethizer?node-id=0%3A1&t=EvtgvVL5MI0K2krK-1',
				icon:
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M10.0001 1.66663H7.22504C5.6917 1.66663 4.45007 2.90829 4.45007 4.44163C4.45007 5.97496 5.6917 7.21663 7.22504 7.21663H10.0001V1.66663Z"
							fill="#FE481C"/>
						<path opacity="0.4"
									d="M10.0001 7.2251H7.22504C5.6917 7.2251 4.45007 8.46677 4.45007 10.0001C4.45007 11.5334 5.6917 12.7751 7.22504 12.7751H10.0001V7.2251Z"
									fill="#FE481C"/>
						<path
							d="M10.0001 12.7749H7.22504C5.6917 12.7749 4.45007 14.0166 4.45007 15.5499C4.45007 17.0832 5.6917 18.3249 7.22504 18.3249C8.75837 18.3249 10.0001 17.0832 10.0001 15.5499V12.7749Z"
							fill="#FE481C"/>
						<path opacity="0.4"
									d="M10 1.66663H12.775C14.3083 1.66663 15.55 2.90829 15.55 4.44163C15.55 5.97496 14.3083 7.21663 12.775 7.21663H10V1.66663Z"
									fill="#FE481C"/>
						<path
							d="M12.775 7.2251C14.3083 7.2251 15.55 8.46677 15.55 10.0001C15.55 11.5334 14.3083 12.7751 12.775 12.7751C11.2417 12.7751 10 11.5334 10 10.0001C10 8.46677 11.2417 7.2251 12.775 7.2251Z"
							fill="#FE481C"/>
					</svg>,
			},
			{
				name: 'Website',
				url: 'https://nethizer.pl',
				icon:
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path opacity="0.4"
									d="M6.37493 17.4249C6.34993 17.4249 6.31659 17.4416 6.29159 17.4416C4.67493 16.6416 3.35826 15.3166 2.54993 13.6999C2.54993 13.6749 2.56659 13.6416 2.56659 13.6166C3.58326 13.9166 4.63326 14.1416 5.67493 14.3166C5.85826 15.3666 6.07493 16.4082 6.37493 17.4249Z"
									fill="#FE481C"/>
						<path opacity="0.4"
									d="M17.45 13.7082C16.625 15.3666 15.25 16.7082 13.575 17.5166C13.8916 16.4582 14.1583 15.3916 14.3333 14.3166C15.3833 14.1416 16.4166 13.9166 17.4333 13.6166C17.425 13.6499 17.45 13.6832 17.45 13.7082Z"
									fill="#FE481C"/>
						<path opacity="0.4"
									d="M17.5166 6.42494C16.4666 6.10828 15.4083 5.84994 14.3333 5.66661C14.1583 4.59161 13.9 3.52494 13.575 2.48328C15.3 3.30828 16.6916 4.69994 17.5166 6.42494Z"
									fill="#FE481C"/>
						<path opacity="0.4"
									d="M6.37494 2.57493C6.07494 3.59159 5.85828 4.62493 5.68328 5.67493C4.60828 5.84159 3.54161 6.10826 2.48328 6.42493C3.29161 4.74993 4.63328 3.37493 6.29161 2.54993C6.31661 2.54993 6.34994 2.57493 6.37494 2.57493Z"
									fill="#FE481C"/>
						<path
							d="M12.9083 5.49163C10.975 5.27496 9.02501 5.27496 7.09167 5.49163C7.30001 4.34996 7.56667 3.20829 7.94167 2.10829C7.95834 2.04163 7.95001 1.99163 7.95834 1.92496C8.61667 1.76663 9.29167 1.66663 10 1.66663C10.7 1.66663 11.3833 1.76663 12.0333 1.92496C12.0417 1.99163 12.0417 2.04163 12.0583 2.10829C12.4333 3.21663 12.7 4.34996 12.9083 5.49163Z"
							fill="#FE481C"/>
						<path
							d="M5.49163 12.9083C4.34163 12.7 3.20829 12.4333 2.10829 12.0583C2.04163 12.0417 1.99163 12.05 1.92496 12.0417C1.76663 11.3833 1.66663 10.7083 1.66663 10C1.66663 9.30001 1.76663 8.61667 1.92496 7.96667C1.99163 7.95834 2.04163 7.95834 2.10829 7.94167C3.21663 7.57501 4.34163 7.30001 5.49163 7.09167C5.28329 9.02501 5.28329 10.975 5.49163 12.9083Z"
							fill="#FE481C"/>
						<path
							d="M18.3333 10C18.3333 10.7083 18.2333 11.3833 18.075 12.0417C18.0083 12.05 17.9583 12.0417 17.8916 12.0583C16.7833 12.425 15.65 12.7 14.5083 12.9083C14.725 10.975 14.725 9.02501 14.5083 7.09167C15.65 7.30001 16.7916 7.56667 17.8916 7.94167C17.9583 7.95834 18.0083 7.96667 18.075 7.96667C18.2333 8.62501 18.3333 9.30001 18.3333 10Z"
							fill="#FE481C"/>
						<path
							d="M12.9083 14.5083C12.7 15.6583 12.4333 16.7916 12.0583 17.8916C12.0417 17.9583 12.0417 18.0083 12.0333 18.075C11.3833 18.2333 10.7 18.3333 10 18.3333C9.29167 18.3333 8.61667 18.2333 7.95834 18.075C7.95001 18.0083 7.95834 17.9583 7.94167 17.8916C7.57501 16.7833 7.30001 15.6583 7.09167 14.5083C8.05834 14.6166 9.02501 14.6916 10 14.6916C10.975 14.6916 11.95 14.6166 12.9083 14.5083Z"
							fill="#FE481C"/>
						<path
							d="M13.1361 13.1361C11.0518 13.399 8.9481 13.399 6.86385 13.1361C6.60088 11.0518 6.60088 8.9481 6.86385 6.86385C8.9481 6.60088 11.0518 6.60088 13.1361 6.86385C13.399 8.9481 13.399 11.0518 13.1361 13.1361Z"
							fill="#FE481C"/>
					</svg>,
			},
		],
		images: [
			{
				src: nethizer1,
				width: 1280,
				height: 680,
			},
			{
				src: nethizer2,
				width: 1280,
				height: 680,
			},
			{
				src: nethizer3,
				width: 1280,
				height: 680,
			},
		],
	},
	{
		id: 3,
		name: 'ZSTiO w TG',
		thumbnail: mechaniktgCover,
		type: 'website',
		date: 'April 02, 2022',
		role: 'Developer & Designer',
		path: 'mechaniktg',
		links: [
			{
				name: 'Design in Figma',
				url: 'https://www.figma.com/file/pvSQIwckQVys2Mq893s7EZ/mechaniktg?node-id=0%3A1&t=vvMOKpY88S7H5Lve-1',
				icon:
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M10.0001 1.66663H7.22504C5.6917 1.66663 4.45007 2.90829 4.45007 4.44163C4.45007 5.97496 5.6917 7.21663 7.22504 7.21663H10.0001V1.66663Z"
							fill="#FE481C"/>
						<path opacity="0.4"
									d="M10.0001 7.2251H7.22504C5.6917 7.2251 4.45007 8.46677 4.45007 10.0001C4.45007 11.5334 5.6917 12.7751 7.22504 12.7751H10.0001V7.2251Z"
									fill="#FE481C"/>
						<path
							d="M10.0001 12.7749H7.22504C5.6917 12.7749 4.45007 14.0166 4.45007 15.5499C4.45007 17.0832 5.6917 18.3249 7.22504 18.3249C8.75837 18.3249 10.0001 17.0832 10.0001 15.5499V12.7749Z"
							fill="#FE481C"/>
						<path opacity="0.4"
									d="M10 1.66663H12.775C14.3083 1.66663 15.55 2.90829 15.55 4.44163C15.55 5.97496 14.3083 7.21663 12.775 7.21663H10V1.66663Z"
									fill="#FE481C"/>
						<path
							d="M12.775 7.2251C14.3083 7.2251 15.55 8.46677 15.55 10.0001C15.55 11.5334 14.3083 12.7751 12.775 12.7751C11.2417 12.7751 10 11.5334 10 10.0001C10 8.46677 11.2417 7.2251 12.775 7.2251Z"
							fill="#FE481C"/>
					</svg>,
			},
			{
				name: 'Website',
				url: 'https://mechaniktg.pl',
				icon:
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path opacity="0.4"
									d="M6.37493 17.4249C6.34993 17.4249 6.31659 17.4416 6.29159 17.4416C4.67493 16.6416 3.35826 15.3166 2.54993 13.6999C2.54993 13.6749 2.56659 13.6416 2.56659 13.6166C3.58326 13.9166 4.63326 14.1416 5.67493 14.3166C5.85826 15.3666 6.07493 16.4082 6.37493 17.4249Z"
									fill="#FE481C"/>
						<path opacity="0.4"
									d="M17.45 13.7082C16.625 15.3666 15.25 16.7082 13.575 17.5166C13.8916 16.4582 14.1583 15.3916 14.3333 14.3166C15.3833 14.1416 16.4166 13.9166 17.4333 13.6166C17.425 13.6499 17.45 13.6832 17.45 13.7082Z"
									fill="#FE481C"/>
						<path opacity="0.4"
									d="M17.5166 6.42494C16.4666 6.10828 15.4083 5.84994 14.3333 5.66661C14.1583 4.59161 13.9 3.52494 13.575 2.48328C15.3 3.30828 16.6916 4.69994 17.5166 6.42494Z"
									fill="#FE481C"/>
						<path opacity="0.4"
									d="M6.37494 2.57493C6.07494 3.59159 5.85828 4.62493 5.68328 5.67493C4.60828 5.84159 3.54161 6.10826 2.48328 6.42493C3.29161 4.74993 4.63328 3.37493 6.29161 2.54993C6.31661 2.54993 6.34994 2.57493 6.37494 2.57493Z"
									fill="#FE481C"/>
						<path
							d="M12.9083 5.49163C10.975 5.27496 9.02501 5.27496 7.09167 5.49163C7.30001 4.34996 7.56667 3.20829 7.94167 2.10829C7.95834 2.04163 7.95001 1.99163 7.95834 1.92496C8.61667 1.76663 9.29167 1.66663 10 1.66663C10.7 1.66663 11.3833 1.76663 12.0333 1.92496C12.0417 1.99163 12.0417 2.04163 12.0583 2.10829C12.4333 3.21663 12.7 4.34996 12.9083 5.49163Z"
							fill="#FE481C"/>
						<path
							d="M5.49163 12.9083C4.34163 12.7 3.20829 12.4333 2.10829 12.0583C2.04163 12.0417 1.99163 12.05 1.92496 12.0417C1.76663 11.3833 1.66663 10.7083 1.66663 10C1.66663 9.30001 1.76663 8.61667 1.92496 7.96667C1.99163 7.95834 2.04163 7.95834 2.10829 7.94167C3.21663 7.57501 4.34163 7.30001 5.49163 7.09167C5.28329 9.02501 5.28329 10.975 5.49163 12.9083Z"
							fill="#FE481C"/>
						<path
							d="M18.3333 10C18.3333 10.7083 18.2333 11.3833 18.075 12.0417C18.0083 12.05 17.9583 12.0417 17.8916 12.0583C16.7833 12.425 15.65 12.7 14.5083 12.9083C14.725 10.975 14.725 9.02501 14.5083 7.09167C15.65 7.30001 16.7916 7.56667 17.8916 7.94167C17.9583 7.95834 18.0083 7.96667 18.075 7.96667C18.2333 8.62501 18.3333 9.30001 18.3333 10Z"
							fill="#FE481C"/>
						<path
							d="M12.9083 14.5083C12.7 15.6583 12.4333 16.7916 12.0583 17.8916C12.0417 17.9583 12.0417 18.0083 12.0333 18.075C11.3833 18.2333 10.7 18.3333 10 18.3333C9.29167 18.3333 8.61667 18.2333 7.95834 18.075C7.95001 18.0083 7.95834 17.9583 7.94167 17.8916C7.57501 16.7833 7.30001 15.6583 7.09167 14.5083C8.05834 14.6166 9.02501 14.6916 10 14.6916C10.975 14.6916 11.95 14.6166 12.9083 14.5083Z"
							fill="#FE481C"/>
						<path
							d="M13.1361 13.1361C11.0518 13.399 8.9481 13.399 6.86385 13.1361C6.60088 11.0518 6.60088 8.9481 6.86385 6.86385C8.9481 6.60088 11.0518 6.60088 13.1361 6.86385C13.399 8.9481 13.399 11.0518 13.1361 13.1361Z"
							fill="#FE481C"/>
					</svg>,
			},
		],
		images: [
			{
				src: mtg1,
				width: 1280,
				height: 680,
			},
			{
				src: mtg2,
				width: 1280,
				height: 680,
			},
			{
				src: mtg3,
				width: 1280,
				height: 680,
			},
			{
				src: mtg4,
				width: 1280,
				height: 680,
			},
		],
	},
	{
		id: 4,
		name: 'mergeIT',
		thumbnail: mergeitCover,
		type: 'website',
		date: 'November 11, 2022',
		role: 'Developer & Designer',
		path: 'mergeit',
		links: [
			{
				name: 'Design in Figma',
				url: 'https://www.figma.com/file/jrwe52Q3e1CzqcsjC0tB8e/mergeit?node-id=0%3A1&t=Erjn8CIgsibyOA1c-1',
				icon:
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M10.0001 1.66663H7.22504C5.6917 1.66663 4.45007 2.90829 4.45007 4.44163C4.45007 5.97496 5.6917 7.21663 7.22504 7.21663H10.0001V1.66663Z"
							fill="#FE481C"/>
						<path opacity="0.4"
									d="M10.0001 7.2251H7.22504C5.6917 7.2251 4.45007 8.46677 4.45007 10.0001C4.45007 11.5334 5.6917 12.7751 7.22504 12.7751H10.0001V7.2251Z"
									fill="#FE481C"/>
						<path
							d="M10.0001 12.7749H7.22504C5.6917 12.7749 4.45007 14.0166 4.45007 15.5499C4.45007 17.0832 5.6917 18.3249 7.22504 18.3249C8.75837 18.3249 10.0001 17.0832 10.0001 15.5499V12.7749Z"
							fill="#FE481C"/>
						<path opacity="0.4"
									d="M10 1.66663H12.775C14.3083 1.66663 15.55 2.90829 15.55 4.44163C15.55 5.97496 14.3083 7.21663 12.775 7.21663H10V1.66663Z"
									fill="#FE481C"/>
						<path
							d="M12.775 7.2251C14.3083 7.2251 15.55 8.46677 15.55 10.0001C15.55 11.5334 14.3083 12.7751 12.775 12.7751C11.2417 12.7751 10 11.5334 10 10.0001C10 8.46677 11.2417 7.2251 12.775 7.2251Z"
							fill="#FE481C"/>
					</svg>,
			},
			{
				name: 'Website',
				url: 'https://mergeit.cc',
				icon:
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path opacity="0.4"
									d="M6.37493 17.4249C6.34993 17.4249 6.31659 17.4416 6.29159 17.4416C4.67493 16.6416 3.35826 15.3166 2.54993 13.6999C2.54993 13.6749 2.56659 13.6416 2.56659 13.6166C3.58326 13.9166 4.63326 14.1416 5.67493 14.3166C5.85826 15.3666 6.07493 16.4082 6.37493 17.4249Z"
									fill="#FE481C"/>
						<path opacity="0.4"
									d="M17.45 13.7082C16.625 15.3666 15.25 16.7082 13.575 17.5166C13.8916 16.4582 14.1583 15.3916 14.3333 14.3166C15.3833 14.1416 16.4166 13.9166 17.4333 13.6166C17.425 13.6499 17.45 13.6832 17.45 13.7082Z"
									fill="#FE481C"/>
						<path opacity="0.4"
									d="M17.5166 6.42494C16.4666 6.10828 15.4083 5.84994 14.3333 5.66661C14.1583 4.59161 13.9 3.52494 13.575 2.48328C15.3 3.30828 16.6916 4.69994 17.5166 6.42494Z"
									fill="#FE481C"/>
						<path opacity="0.4"
									d="M6.37494 2.57493C6.07494 3.59159 5.85828 4.62493 5.68328 5.67493C4.60828 5.84159 3.54161 6.10826 2.48328 6.42493C3.29161 4.74993 4.63328 3.37493 6.29161 2.54993C6.31661 2.54993 6.34994 2.57493 6.37494 2.57493Z"
									fill="#FE481C"/>
						<path
							d="M12.9083 5.49163C10.975 5.27496 9.02501 5.27496 7.09167 5.49163C7.30001 4.34996 7.56667 3.20829 7.94167 2.10829C7.95834 2.04163 7.95001 1.99163 7.95834 1.92496C8.61667 1.76663 9.29167 1.66663 10 1.66663C10.7 1.66663 11.3833 1.76663 12.0333 1.92496C12.0417 1.99163 12.0417 2.04163 12.0583 2.10829C12.4333 3.21663 12.7 4.34996 12.9083 5.49163Z"
							fill="#FE481C"/>
						<path
							d="M5.49163 12.9083C4.34163 12.7 3.20829 12.4333 2.10829 12.0583C2.04163 12.0417 1.99163 12.05 1.92496 12.0417C1.76663 11.3833 1.66663 10.7083 1.66663 10C1.66663 9.30001 1.76663 8.61667 1.92496 7.96667C1.99163 7.95834 2.04163 7.95834 2.10829 7.94167C3.21663 7.57501 4.34163 7.30001 5.49163 7.09167C5.28329 9.02501 5.28329 10.975 5.49163 12.9083Z"
							fill="#FE481C"/>
						<path
							d="M18.3333 10C18.3333 10.7083 18.2333 11.3833 18.075 12.0417C18.0083 12.05 17.9583 12.0417 17.8916 12.0583C16.7833 12.425 15.65 12.7 14.5083 12.9083C14.725 10.975 14.725 9.02501 14.5083 7.09167C15.65 7.30001 16.7916 7.56667 17.8916 7.94167C17.9583 7.95834 18.0083 7.96667 18.075 7.96667C18.2333 8.62501 18.3333 9.30001 18.3333 10Z"
							fill="#FE481C"/>
						<path
							d="M12.9083 14.5083C12.7 15.6583 12.4333 16.7916 12.0583 17.8916C12.0417 17.9583 12.0417 18.0083 12.0333 18.075C11.3833 18.2333 10.7 18.3333 10 18.3333C9.29167 18.3333 8.61667 18.2333 7.95834 18.075C7.95001 18.0083 7.95834 17.9583 7.94167 17.8916C7.57501 16.7833 7.30001 15.6583 7.09167 14.5083C8.05834 14.6166 9.02501 14.6916 10 14.6916C10.975 14.6916 11.95 14.6166 12.9083 14.5083Z"
							fill="#FE481C"/>
						<path
							d="M13.1361 13.1361C11.0518 13.399 8.9481 13.399 6.86385 13.1361C6.60088 11.0518 6.60088 8.9481 6.86385 6.86385C8.9481 6.60088 11.0518 6.60088 13.1361 6.86385C13.399 8.9481 13.399 11.0518 13.1361 13.1361Z"
							fill="#FE481C"/>
					</svg>,
			},
		],
		images: [
			{
				src: mit1,
				width: 1318,
				height: 680,
			},
			{
				src: mit2,
				width: 1318,
				height: 680,
			},
		],
	},
  {
    id: 5,
    name: 'Górna Chata',
    thumbnail: gornachataCover,
    type: 'website',
    date: 'August 13, 2023',
    role: 'Developer & Designer',
    path: 'gornachata',
    links: [
      {
        name: 'Design in Figma',
        url: 'https://www.figma.com/file/A2ILSIgaSeaTQS2YCFPtMU/gornachata?type=design&node-id=0%3A1&mode=design&t=9ZqLAopoRSUyOdKn-1',
        icon:
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.0001 1.66663H7.22504C5.6917 1.66663 4.45007 2.90829 4.45007 4.44163C4.45007 5.97496 5.6917 7.21663 7.22504 7.21663H10.0001V1.66663Z"
              fill="#FE481C"/>
            <path opacity="0.4"
                  d="M10.0001 7.2251H7.22504C5.6917 7.2251 4.45007 8.46677 4.45007 10.0001C4.45007 11.5334 5.6917 12.7751 7.22504 12.7751H10.0001V7.2251Z"
                  fill="#FE481C"/>
            <path
              d="M10.0001 12.7749H7.22504C5.6917 12.7749 4.45007 14.0166 4.45007 15.5499C4.45007 17.0832 5.6917 18.3249 7.22504 18.3249C8.75837 18.3249 10.0001 17.0832 10.0001 15.5499V12.7749Z"
              fill="#FE481C"/>
            <path opacity="0.4"
                  d="M10 1.66663H12.775C14.3083 1.66663 15.55 2.90829 15.55 4.44163C15.55 5.97496 14.3083 7.21663 12.775 7.21663H10V1.66663Z"
                  fill="#FE481C"/>
            <path
              d="M12.775 7.2251C14.3083 7.2251 15.55 8.46677 15.55 10.0001C15.55 11.5334 14.3083 12.7751 12.775 12.7751C11.2417 12.7751 10 11.5334 10 10.0001C10 8.46677 11.2417 7.2251 12.775 7.2251Z"
              fill="#FE481C"/>
          </svg>,
      },
    ],
    images: [
      {
        src: gornachataCover,
        width: 1280,
        height: 680,
      },
    ],
  },
  {
    id: 6,
    name: 'parafia tapkowice',
    thumbnail: parafiaCover,
    type: 'website & dashboard',
    date: 'September 5, 2023',
    role: 'Developer & Designer',
    path: 'parafiatapkowice',
    links: [
      {
        name: 'Design in Figma',
        url: 'https://www.figma.com/file/4tIGnTfF5eB7as6of1TOAq/parafiatapkowice?type=design&node-id=0%3A1&mode=design&t=Tfjmw1nRqIUUgCaT-1',
        icon:
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.0001 1.66663H7.22504C5.6917 1.66663 4.45007 2.90829 4.45007 4.44163C4.45007 5.97496 5.6917 7.21663 7.22504 7.21663H10.0001V1.66663Z"
              fill="#FE481C"/>
            <path opacity="0.4"
                  d="M10.0001 7.2251H7.22504C5.6917 7.2251 4.45007 8.46677 4.45007 10.0001C4.45007 11.5334 5.6917 12.7751 7.22504 12.7751H10.0001V7.2251Z"
                  fill="#FE481C"/>
            <path
              d="M10.0001 12.7749H7.22504C5.6917 12.7749 4.45007 14.0166 4.45007 15.5499C4.45007 17.0832 5.6917 18.3249 7.22504 18.3249C8.75837 18.3249 10.0001 17.0832 10.0001 15.5499V12.7749Z"
              fill="#FE481C"/>
            <path opacity="0.4"
                  d="M10 1.66663H12.775C14.3083 1.66663 15.55 2.90829 15.55 4.44163C15.55 5.97496 14.3083 7.21663 12.775 7.21663H10V1.66663Z"
                  fill="#FE481C"/>
            <path
              d="M12.775 7.2251C14.3083 7.2251 15.55 8.46677 15.55 10.0001C15.55 11.5334 14.3083 12.7751 12.775 12.7751C11.2417 12.7751 10 11.5334 10 10.0001C10 8.46677 11.2417 7.2251 12.775 7.2251Z"
              fill="#FE481C"/>
          </svg>,
      },
    ],
    images: [
      {
        src: parafiaCover,
        width: 1280,
        height: 680,
      },
    ],
  },
  {
    id: 7,
    name: 'xddd.info',
    thumbnail: xdddCover,
    type: 'website',
    date: 'November 24, 2023',
    role: 'Developer & Designer',
    path: 'xddd',
    links: [
      {
        name: 'Design in Figma',
        url: 'https://www.figma.com/file/3VnmAbWTiaq5MhV5XfzFHz/xddd?type=design&node-id=0%3A1&mode=design&t=YE2VIOe8XKq6KWku-1',
        icon:
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.0001 1.66663H7.22504C5.6917 1.66663 4.45007 2.90829 4.45007 4.44163C4.45007 5.97496 5.6917 7.21663 7.22504 7.21663H10.0001V1.66663Z"
              fill="#FE481C"/>
            <path opacity="0.4"
                  d="M10.0001 7.2251H7.22504C5.6917 7.2251 4.45007 8.46677 4.45007 10.0001C4.45007 11.5334 5.6917 12.7751 7.22504 12.7751H10.0001V7.2251Z"
                  fill="#FE481C"/>
            <path
              d="M10.0001 12.7749H7.22504C5.6917 12.7749 4.45007 14.0166 4.45007 15.5499C4.45007 17.0832 5.6917 18.3249 7.22504 18.3249C8.75837 18.3249 10.0001 17.0832 10.0001 15.5499V12.7749Z"
              fill="#FE481C"/>
            <path opacity="0.4"
                  d="M10 1.66663H12.775C14.3083 1.66663 15.55 2.90829 15.55 4.44163C15.55 5.97496 14.3083 7.21663 12.775 7.21663H10V1.66663Z"
                  fill="#FE481C"/>
            <path
              d="M12.775 7.2251C14.3083 7.2251 15.55 8.46677 15.55 10.0001C15.55 11.5334 14.3083 12.7751 12.775 12.7751C11.2417 12.7751 10 11.5334 10 10.0001C10 8.46677 11.2417 7.2251 12.775 7.2251Z"
              fill="#FE481C"/>
          </svg>,
      },
      {
        name: 'Website',
        url: 'https://xddd.info',
        icon:
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4"
                  d="M6.37493 17.4249C6.34993 17.4249 6.31659 17.4416 6.29159 17.4416C4.67493 16.6416 3.35826 15.3166 2.54993 13.6999C2.54993 13.6749 2.56659 13.6416 2.56659 13.6166C3.58326 13.9166 4.63326 14.1416 5.67493 14.3166C5.85826 15.3666 6.07493 16.4082 6.37493 17.4249Z"
                  fill="#FE481C"/>
            <path opacity="0.4"
                  d="M17.45 13.7082C16.625 15.3666 15.25 16.7082 13.575 17.5166C13.8916 16.4582 14.1583 15.3916 14.3333 14.3166C15.3833 14.1416 16.4166 13.9166 17.4333 13.6166C17.425 13.6499 17.45 13.6832 17.45 13.7082Z"
                  fill="#FE481C"/>
            <path opacity="0.4"
                  d="M17.5166 6.42494C16.4666 6.10828 15.4083 5.84994 14.3333 5.66661C14.1583 4.59161 13.9 3.52494 13.575 2.48328C15.3 3.30828 16.6916 4.69994 17.5166 6.42494Z"
                  fill="#FE481C"/>
            <path opacity="0.4"
                  d="M6.37494 2.57493C6.07494 3.59159 5.85828 4.62493 5.68328 5.67493C4.60828 5.84159 3.54161 6.10826 2.48328 6.42493C3.29161 4.74993 4.63328 3.37493 6.29161 2.54993C6.31661 2.54993 6.34994 2.57493 6.37494 2.57493Z"
                  fill="#FE481C"/>
            <path
              d="M12.9083 5.49163C10.975 5.27496 9.02501 5.27496 7.09167 5.49163C7.30001 4.34996 7.56667 3.20829 7.94167 2.10829C7.95834 2.04163 7.95001 1.99163 7.95834 1.92496C8.61667 1.76663 9.29167 1.66663 10 1.66663C10.7 1.66663 11.3833 1.76663 12.0333 1.92496C12.0417 1.99163 12.0417 2.04163 12.0583 2.10829C12.4333 3.21663 12.7 4.34996 12.9083 5.49163Z"
              fill="#FE481C"/>
            <path
              d="M5.49163 12.9083C4.34163 12.7 3.20829 12.4333 2.10829 12.0583C2.04163 12.0417 1.99163 12.05 1.92496 12.0417C1.76663 11.3833 1.66663 10.7083 1.66663 10C1.66663 9.30001 1.76663 8.61667 1.92496 7.96667C1.99163 7.95834 2.04163 7.95834 2.10829 7.94167C3.21663 7.57501 4.34163 7.30001 5.49163 7.09167C5.28329 9.02501 5.28329 10.975 5.49163 12.9083Z"
              fill="#FE481C"/>
            <path
              d="M18.3333 10C18.3333 10.7083 18.2333 11.3833 18.075 12.0417C18.0083 12.05 17.9583 12.0417 17.8916 12.0583C16.7833 12.425 15.65 12.7 14.5083 12.9083C14.725 10.975 14.725 9.02501 14.5083 7.09167C15.65 7.30001 16.7916 7.56667 17.8916 7.94167C17.9583 7.95834 18.0083 7.96667 18.075 7.96667C18.2333 8.62501 18.3333 9.30001 18.3333 10Z"
              fill="#FE481C"/>
            <path
              d="M12.9083 14.5083C12.7 15.6583 12.4333 16.7916 12.0583 17.8916C12.0417 17.9583 12.0417 18.0083 12.0333 18.075C11.3833 18.2333 10.7 18.3333 10 18.3333C9.29167 18.3333 8.61667 18.2333 7.95834 18.075C7.95001 18.0083 7.95834 17.9583 7.94167 17.8916C7.57501 16.7833 7.30001 15.6583 7.09167 14.5083C8.05834 14.6166 9.02501 14.6916 10 14.6916C10.975 14.6916 11.95 14.6166 12.9083 14.5083Z"
              fill="#FE481C"/>
            <path
              d="M13.1361 13.1361C11.0518 13.399 8.9481 13.399 6.86385 13.1361C6.60088 11.0518 6.60088 8.9481 6.86385 6.86385C8.9481 6.60088 11.0518 6.60088 13.1361 6.86385C13.399 8.9481 13.399 11.0518 13.1361 13.1361Z"
              fill="#FE481C"/>
          </svg>,
      },
      {
        name: 'GitHub',
        url: 'https://github.com/rokartur/xddd.info',
        icon:
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_734_337)">
              <path
                d="M6.68952 16.104C6.68952 16.1867 6.59677 16.2529 6.47984 16.2529C6.34677 16.2653 6.25403 16.1991 6.25403 16.104C6.25403 16.0213 6.34677 15.9551 6.46371 15.9551C6.58468 15.9427 6.68952 16.0089 6.68952 16.104ZM5.43548 15.9179C5.40726 16.0006 5.4879 16.0957 5.60887 16.1205C5.71371 16.1619 5.83468 16.1205 5.85887 16.0378C5.88306 15.9551 5.80645 15.86 5.68548 15.8228C5.58064 15.7938 5.46371 15.8352 5.43548 15.9179ZM7.21774 15.8476C7.10081 15.8765 7.02016 15.9551 7.03226 16.0502C7.04435 16.1329 7.14919 16.1867 7.27016 16.1577C7.3871 16.1288 7.46774 16.0502 7.45564 15.9675C7.44355 15.8889 7.33468 15.8352 7.21774 15.8476ZM9.87097 0C4.27823 0 0 4.35477 0 10.0908C0 14.6772 2.81452 18.6019 6.83468 19.9832C7.35081 20.0783 7.53226 19.7516 7.53226 19.4827C7.53226 19.2263 7.52016 17.812 7.52016 16.9435C7.52016 16.9435 4.69758 17.5638 4.10484 15.7111C4.10484 15.7111 3.64516 14.5076 2.98387 14.1975C2.98387 14.1975 2.06048 13.5482 3.04839 13.5606C3.04839 13.5606 4.05242 13.6433 4.60484 14.6276C5.4879 16.2239 6.96774 15.7649 7.54435 15.4919C7.6371 14.8302 7.89919 14.3712 8.18952 14.0982C5.93548 13.8418 3.66129 13.5068 3.66129 9.52839C3.66129 8.3911 3.96774 7.82039 4.6129 7.09253C4.50806 6.82372 4.16532 5.71538 4.71774 4.28447C5.56048 4.01565 7.5 5.40108 7.5 5.40108C8.30645 5.16948 9.17339 5.04955 10.0323 5.04955C10.8911 5.04955 11.7581 5.16948 12.5645 5.40108C12.5645 5.40108 14.504 4.01152 15.3468 4.28447C15.8992 5.71951 15.5565 6.82372 15.4516 7.09253C16.0968 7.82453 16.4919 8.39524 16.4919 9.52839C16.4919 13.5192 14.1169 13.8377 11.8629 14.0982C12.2339 14.4249 12.5484 15.0453 12.5484 16.0171C12.5484 17.4108 12.5363 19.1354 12.5363 19.4745C12.5363 19.7433 12.7218 20.07 13.2339 19.9749C17.2661 18.6019 20 14.6772 20 10.0908C20 4.35477 15.4637 0 9.87097 0ZM3.91935 14.2636C3.86694 14.305 3.87903 14.4001 3.94758 14.4787C4.0121 14.5449 4.10484 14.5738 4.15726 14.52C4.20968 14.4787 4.19758 14.3836 4.12903 14.305C4.06452 14.2388 3.97177 14.2099 3.91935 14.2636ZM3.48387 13.9287C3.45565 13.9824 3.49597 14.0486 3.57661 14.0899C3.64113 14.1313 3.72177 14.1189 3.75 14.061C3.77823 14.0072 3.7379 13.9411 3.65726 13.8997C3.57661 13.8749 3.5121 13.8873 3.48387 13.9287ZM4.79032 15.4009C4.72581 15.4547 4.75 15.5788 4.84274 15.6573C4.93548 15.7524 5.05242 15.7649 5.10484 15.6987C5.15726 15.6449 5.13306 15.5209 5.05242 15.4423C4.96371 15.3472 4.84274 15.3348 4.79032 15.4009ZM4.33065 14.793C4.26613 14.8343 4.26613 14.9419 4.33065 15.037C4.39516 15.1321 4.50403 15.1735 4.55645 15.1321C4.62097 15.0783 4.62097 14.9708 4.55645 14.8757C4.5 14.7806 4.39516 14.7392 4.33065 14.793Z"
                fill="#FE481C"/>
            </g>
            <defs>
              <clipPath id="clip0_734_337">
                <rect width="20" height="20" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        ,
      },
    ],
    images: [
      {
        src: xdddCover,
        width: 1280,
        height: 680,
      },
    ],
  },
	{
		id: 8,
		name: 'Warzywniok',
		thumbnail: warzywniokCover,
		type: 'shop',
		date: 'January 17, 2024',
		role: 'Developer & Designer',
		path: 'warzywniok',
		links: [
			{
				name: 'Design in Figma',
				url: 'https://www.figma.com/file/fPbPk56gMJfp3YwKGRoXgd/warzywniok?type=design&node-id=0%3A1&mode=design&t=Axl2IZFyITXVQlQ6-1',
				icon:
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M10.0001 1.66663H7.22504C5.6917 1.66663 4.45007 2.90829 4.45007 4.44163C4.45007 5.97496 5.6917 7.21663 7.22504 7.21663H10.0001V1.66663Z"
							fill="#FE481C"/>
						<path opacity="0.4"
									d="M10.0001 7.2251H7.22504C5.6917 7.2251 4.45007 8.46677 4.45007 10.0001C4.45007 11.5334 5.6917 12.7751 7.22504 12.7751H10.0001V7.2251Z"
									fill="#FE481C"/>
						<path
							d="M10.0001 12.7749H7.22504C5.6917 12.7749 4.45007 14.0166 4.45007 15.5499C4.45007 17.0832 5.6917 18.3249 7.22504 18.3249C8.75837 18.3249 10.0001 17.0832 10.0001 15.5499V12.7749Z"
							fill="#FE481C"/>
						<path opacity="0.4"
									d="M10 1.66663H12.775C14.3083 1.66663 15.55 2.90829 15.55 4.44163C15.55 5.97496 14.3083 7.21663 12.775 7.21663H10V1.66663Z"
									fill="#FE481C"/>
						<path
							d="M12.775 7.2251C14.3083 7.2251 15.55 8.46677 15.55 10.0001C15.55 11.5334 14.3083 12.7751 12.775 12.7751C11.2417 12.7751 10 11.5334 10 10.0001C10 8.46677 11.2417 7.2251 12.775 7.2251Z"
							fill="#FE481C"/>
					</svg>,
			},
		],
		images: [
			{
				src: warzywniokCover,
				width: 1280,
				height: 680,
			},
		],
	},
]

export default projectsData.reverse()
