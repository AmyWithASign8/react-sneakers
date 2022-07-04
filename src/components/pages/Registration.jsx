import React from 'react';
import {Input, Button} from '../index';
import '../../index.scss';
import {Link} from 'react-router-dom';
import {Login} from './index';

function Registration() {
  return (
    <div>
        <div className='registrationForm'>
            <h1 className='text-center'>Registration</h1>
            <Input placeName='Имя'/><hr/>
            <Input placeName='Введите номер телефона'/><hr/>
            <Input placeName='Введите email'/><hr/>
            <Input placeName='Введите пароль'/>
            <Button>Регестрация</Button>
            <p className='text-center'>У вас уже есть аккаунт? <Link to='/auth/login' element={<Login/>}><a>Войдите!</a></Link></p>
        </div>
    </div>
  )
}

export default Registration