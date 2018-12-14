import axios from 'axios';
import { delay } from './utils';

const DICE_SERVICE = '';

const endpoints = {
  repoList: () => '/repos',
  userList: () => '/users',
  userRepos: id => `/users/${id}/repos`,
  userActivities: id => `/users/${id}/activity`,
  repoUsers: id => `/repos/${id}/users`,
  repoActivities: id => `/repos/${id}/activity`
};

export default (src, id) => () =>
  delay(1000).then(_ =>
    axios
      .get(DICE_SERVICE + endpoints[src](id))
      .then(res => res.data)
      // .catch(err => err)
      .catch(err => {
        switch (src) {
          case 'repoList':
            return {
              repos: [
                {
                  name: 'DecipherNow/gm-fabric-jvm'
                }
              ]
            };
          case 'userList':
            return {
              users: [
                {
                  username: 'ghershfield',
                  display_name: 'Garth Hershfield'
                }
              ]
            };
          case 'userRepos':
            return {
              repository: [
                {
                  name: 'DecipherNow/gm-fabric-go'
                }
              ]
            };
          case 'userActivities':
            return {
              activity: [
                {
                  created_at: '2018-12-12T14:49:39Z',
                  actor: 'ghershfield',
                  repo_name: 'DecipherNow/gm-fabric-jvm',
                  type: 'IssueCommentEvent',
                  summaryline: 'IssueCommentEvent in DecipherNow/gm-fabric-jvm'
                },
                {
                  created_at: '2018-12-11T11:20:41Z',
                  actor: 'ghershfield',
                  repo_name: 'DecipherNow/gm-fabric-jvm',
                  type: 'IssuesEvent',
                  summaryline:
                    'closed DecipherNow/gm-fabric-jvm#169 There are times when applications built on gm-fabric-jvm need to customize the ExceptionMapper instances that are added to the HttpRouter, internal to the GMFabricRestServer.  In these cases, it would be helpful if there were a way to register custom ExceptionMappers with the GMFabricRestServer.  A possible solution might be to receive them as optional arguments to the GMFabricRestServer constructor, similar to how the filters are currently registered.\r\n\r\nThis is related to the recent pull request, #162.  That pull request added an IndividualRequestTimeoutExceptionMapper, but there times when additional or different mappers are needed.'
                }
              ]
            };
          case 'repoUsers':
          case 'repoActivities':
            return {
              users: [],
              activity: [
                {
                  name: 'DecipherNow/gm-fabric-go',
                  summaryline: 'placeholder summary line'
                }
              ]
            };
          default:
            return err;
        }
      })
  );
